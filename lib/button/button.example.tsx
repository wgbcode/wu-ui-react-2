import React, { useState } from "react";
import "./button.example.scss";
import CommonExample from "../common.example";
import Button from "./button";
import Icon from "../icon/icon";
import { scopedClassMaker } from "../helpers/classes";

const sc = scopedClassMaker("wu-button-loading");
const ButtonExample: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const callBack = (event: React.MouseEvent<Element, MouseEvent>) => {
    console.log("回调函数已被调用");
  };
  const onLoading = () => {
    setLoading(!loading);
  };
  const name = "Button";
  const titleText = "按钮用于开始一个即时操作。";
  const usageText = "需要响应用户点击行为时，触发相应业务逻辑。";
  const codeContent = [
    [
      name + 1,
      <div>
        <Button type="default" callBack={callBack}>
          Default
        </Button>
        <Button type="primary" callBack={callBack}>
          Primary
        </Button>
        <Button type="dashed" callBack={callBack}>
          Dashed
        </Button>
        <Button type="danger" callBack={callBack}>
          Danger
        </Button>
      </div>,
      "按钮类型",
      "按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。",
    ],
    [
      name + 2,
      <div>
        <Button type="dauleft" ghost={true}>
          Dauleft
        </Button>
        <Button type="primary" ghost={true}>
          Primary
        </Button>
        <Button type="dashed" ghost={true}>
          Dashed
        </Button>
        <Button type="danger" ghost={true}>
          Danger
        </Button>
      </div>,
      "幽灵按钮",
      "幽灵按钮常用在有色背景上。",
    ],
    [
      name + 3,
      <div className={sc("")}>
        <Button className={sc("child1")}>Disabled</Button>
        <Button className={sc("child2")}>
          <span className={sc("child2-animation")}></span>
          <span>Loading</span>
        </Button>
        <Button loading={false} className={sc("child3")} onLoading={onLoading}>
          {loading ? (
            <span className={sc("child2")}>
              <span className={sc("child2-animation")}></span>
            </span>
          ) : (
            <div className={sc("child3-icon")}>
              <Icon name="setting" />
            </div>
          )}
          <span>Click me</span>
        </Button>
      </div>,
      "Disabled 和 Loading 状态",
      "设置按钮的禁用和加载中状态。",
    ],
  ];
  const API = [
    ["className", "自定义 button 类名", "string", "————"],
    [
      "type",
      "不同样式风格的按钮",
      "'default' | 'dashed' | 'primary' | 'danger'",
      "default",
    ],
    ["ghost", "幽灵按扭", "boolean", "false"],
    ["loading", "加载中状态", "boolean", "false"],
    ["onClick", "点击按钮时的回调函数", "React.MouseEventHandler", "————"],
  ];

  return (
    <div>
      <CommonExample
        name={name}
        titleText={titleText}
        usageText={usageText}
        codeContent={codeContent}
        API={API}
        apiCodeFile={require("!!raw-loader!./button.api.tsx")}
      />
    </div>
  );
};

export default ButtonExample;
