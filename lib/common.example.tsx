import Icon from "./icon/icon";
import React, { useState } from "react";
import classes, { scopedClassMaker } from "./helpers/classes";
import APICode from "./apiCode";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  name: string;
  titleText: string;
  usageText: string;
  codeContent: Array<any[]>;
  API: Array<any[]>;
  apiCodeFile?: any;
}

const CommonExample: React.FunctionComponent<Props> = (props) => {
  let { name, titleText, usageText, codeContent, API, apiCodeFile } = props;
  const sc = scopedClassMaker("wu-" + `${name.toLowerCase()}` + "-example");
  const sc1 = scopedClassMaker(
    "wu-" + `${name.toLowerCase()}` + "-example-code-content"
  );
  const sc2 = scopedClassMaker(
    "wu-" + `${name.toLowerCase()}` + "-example-API"
  );
  const [itemName, setItemName] = useState([""]);
  let container = itemName;
  const onCodeVisible = (value: string) => {
    let index = container.indexOf(value);
    if (index < 0) {
      container = [...itemName, value];
    } else {
      let container2 = JSON.parse(JSON.stringify(container));
      container2.splice(index, 1);
      container = container2;
    }
    setItemName(container);
  };
  return (
    <ol className={sc("")}>
      <li className={sc("title")}>
        <h1>{name}</h1>
        <span>{titleText}</span>
      </li>
      <li className={sc("usage")}>
        <h2>何时使用</h2>
        <span>{usageText}</span>
      </li>
      <li className={sc("code")}>
        <h2>代码示例</h2>
        {codeContent.map((item) => (
          <div className={sc1("")} key={item[0]}>
            <div
              className={classes(
                sc1("items"),
                sc1("items-" + `${item[0].toLowerCase()}`)
              )}
            >
              {item[1]}
            </div>
            <ol className={sc1("title")}>
              <li className={sc1("title-left")}></li>
              <li className={sc1("title-center")}>{item[2]}</li>
              <li className={sc1("title-right")}></li>
            </ol>
            <div className={sc1("illust")}>
              <span className={sc1("illust-text")}>{item[3]}</span>
              <div
                className={sc1("illust-icon")}
                onClick={() => onCodeVisible(item[0])}
              >
                <Icon name="codeOpen" />
              </div>
            </div>

            {container.indexOf(item[0]) >= 0 && apiCodeFile && (
              <APICode code={apiCodeFile} />
            )}
          </div>
        ))}
      </li>

      <li className={sc2("")}>
        <h2>API</h2>
        <table className={sc2("table")}>
          <thead className={sc2("table-thead")}>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody className={sc2("table-tbody")}>
            {API.map((item) => (
              <tr key={item[0]}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </li>
    </ol>
  );
};

export default CommonExample;
