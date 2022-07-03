import { FormValue } from "./form";

const Validator = (
  formData: FormValue,
  rules: FormValue[],
  callback: (errors: FormValue) => void
) => {
  let errors: FormValue = {};
  const addError = (key: string, error: string | Promise<string>) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  rules.forEach((rule) => {
    const value = formData[rule.key];
    if (value && rule.validator) {
      const promise = rule.validator(value); // 拿到传递过来的 Promise 对象，并将参数也解析成 Promise 对象
      addError(rule.key, promise);
    }
    if (!value && rule.required) {
      addError(rule.key, "required");
    }
    if (value && rule.minLength && value.length < rule.minLength) {
      addError(rule.key, "minLength");
    }
    if (value && rule.maxLength && value.length > rule.maxLength) {
      addError(rule.key, "maxLength");
    }
    if (value && rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, "pattern");
    }
  });
  function hasError(
    item: [string, undefined] | [string, string]
  ): item is [string, string] {
    return typeof item[1] === "string";
  }
  const flattenErrors = flat(
    Object.keys(errors).map((key) =>
      errors[key].map((error: string | Promise<string>) => [key, error])
    )
  ); // 三层嵌套数组；把每个 error 拿出来，并添加相应的 key。

  const newPromises = flattenErrors.map(([key, promiseOrString]) => {
    const promise =
      promiseOrString instanceof Promise
        ? promiseOrString
        : Promise.reject(promiseOrString); // 把非 Promise 实例解析成 Promise 实例（rejected 状态，不带 key）。
    return promise.then<[string, undefined], [string, string]>(
      () => [key, undefined],
      (reason) => [key, reason]
    ); // 参数加上 key，并返回一个新的 Promise 实例（pending 状态 | resolved 状态）
  });

  Promise.all(newPromises).then((results) => {
    callback(zip(results.filter<[string, string]>(hasError)));
  }); // callback 需要等异步操作完成后才能调用，通过 Promise.all() 方法实现。
};

function flat(array: any) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
} // 把三层嵌套数组变两层嵌套数组

function zip(kvList: Array<[string, string]>) {
  const result: { [key: string]: string[] } = {};
  kvList.map(([key, value]) => {
    result[key] = result[key] || [];
    result[key].push(value);
  });
  return result;
} // 数组转成对象

export default Validator;
