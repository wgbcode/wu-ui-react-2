import React, { ReactFragment } from "react";
import classes, { scopedClassMaker } from "../helpers/classes";
import "./form.scss";

export interface FormValue {
  [key: string]: any;
}

interface FieldsValue {
  name: string;
  label: string;
  input: { type: string };
}

interface Props extends React.HTMLAttributes<HTMLElement> {
  formData: FormValue;
  fields: Array<FieldsValue>;
  errors?: FormValue;
  onChange: (newValue: FormValue) => void;
  onSubmit: () => void;
  onReset: () => void;
  transformError?: (message: string) => FormValue;
  className?: string;
  button: ReactFragment;
}

const Form: React.FC<Props> = ({
  formData,
  fields,
  errors,
  transformError,
  button,
  onChange,
  onSubmit,
  onReset,
  className,
}) => {
  const sc = scopedClassMaker("wu-form-tbody-tr-td");
  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value };
    onChange(newFormData);
  };
  const submit = (e: any) => {
    e.preventDefault();
    onSubmit();
  };
  const reset = (e: any) => {
    e.preventDefault();
    onReset();
  };
  return (
    <form onSubmit={submit} onReset={reset} className={classes(className)}>
      <table>
        {fields.map((f: FieldsValue) => (
          <tbody key={f.name}>
            <tr>
              <td>
                <span className={sc("name")}>{f.label}</span>
              </td>
              <td>
                <input
                  className={sc("input")}
                  type={f.input.type}
                  value={formData[f.name]}
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ height: 24 }}></td>
              <td className={sc("error")}>
                {errors &&
                  transformError &&
                  errors[f.name] &&
                  transformError(errors[f.name][0])}
              </td>
            </tr>
          </tbody>
        ))}
        <tbody>
          <tr>
            <td></td>
            <td>{button}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
