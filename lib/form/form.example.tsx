import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";
import "./form.example.scss";
import CommonExample from "../common.example";
import { scopedClassMaker } from "../helpers/classes";

const usernames = ["frank", "jack", "frankfrank", "alice", "bob"];
const sc = scopedClassMaker("wu-form-tbody-tr-td");

const checkUserName = (
  username: string,
  succeed: () => void,
  fail: () => void
) => {
  if (usernames.indexOf(username) < 0) {
    succeed();
  } else {
    fail();
  }
};

const FormExample: React.FC = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: "",
    password: "",
  });
  const [fields] = useState([
    { name: "username", label: "Username", input: { type: "text" } },
    { name: "password", label: "Password", input: { type: "text" } },
  ]);
  const [errors, setErrors] = useState({});
  const validator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(
        username,
        () => resolve(""),
        () => reject("unique") // 返回一个被拒绝的 Promise 对象，并将参数传出
      );
    });
  };
  function noError(errors: any) {
    return Object.keys(errors).length === 0;
  }
  const onSubmit = () => {
    const rules = [
      { key: "username", required: true },
      { key: "username", validator },
      { key: "username", minLength: 6, maxLength: 16 },
      { key: "password", required: true },
      { key: "password", pattern: /^[A-Za-z0-9]+$/ },
    ];
    Validator(formData, rules, (errors) => {
      setErrors(errors);
      if (noError(errors)) {
        console.log("输入正确，noError。");
      }
    });
  };
  const onReset = () => {
    setFormData({ username: "", password: "" });
    setErrors({});
  };
  const transformError = (message: string) => {
    const map: any = {
      unique: "The username already exists!",
      required: "Please input your content!",
      minLength: "Input content is less than 6 characters!",
      maxLength: "Input content is more than 16 characters!",
      pattern:
        "Character style does not match, you should enter 0-9 | a-z | A-Z!",
    };
    return map[message];
  };
  const name = "Form";
  const titleText = "Form 表单控件，功能包含数据录入和数据校验。";
  const usageText = "需要用户输入内容时。";
  const codeContent = [
    [
      name,
      <Form
        fields={fields}
        formData={formData}
        onChange={(newValue) => setFormData(newValue)}
        button={
          <Fragment>
            <button className={sc("submit")} type="submit">
              Submit
            </button>
            <button className={sc("reset")} type="reset">
              Reset
            </button>
          </Fragment>
        }
        onSubmit={() => onSubmit()}
        onReset={() => onReset()}
        transformError={transformError}
        errors={errors}
      ></Form>,
      "基本使用",
      "表单输入内容后，点 submit 按钮会对输入的表单数据进行检验，若不符合检验规则会输出错误信息，点 reset 按键会重置表单数据。",
    ],
  ];
  const API = [
    [
      "formData",
      "Form 表单当前的 input 数据",
      "FormValue",
      "{username:'', pasword:''}",
    ],
    [
      "fields",
      "标记 Form 表单每一个子元素，记录有每个子元素 inputType 等信息。",
      "Array<FieldsValue>",
      "————",
    ],
    ["errors", "表单提交后，经校验返回的错误集。", "FieldData[]", "————"],
    [
      "onChange",
      "字段值更新时触发的回调事件",
      "(newValue: FormValue) => void",
      "————",
    ],
    [
      "onSubmit",
      "提交表单后的回调函数，会根据校验规则对提交的内容进行验证。",
      "()=>void",
      "————",
    ],
    [
      "onReset",
      "数据重置回调函数，会清空当前的 formData、errors。",
      "()=>void",
      "————",
    ],
    [
      "transformError",
      "错误信息转换回调函数，根据返回的错误信息转换成对应的字符并渲染到页面。",
      "(message: string) => FormValue",
      "————",
    ],
  ];

  return (
    <CommonExample
      name={name}
      titleText={titleText}
      usageText={usageText}
      codeContent={codeContent}
      API={API}
      apiCodeFile={require("!!raw-loader!./form.api.tsx")}
    />
  );
};

export default FormExample;
