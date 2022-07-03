import React from "react";
import Icon from "./icon";
import "./icon.example.scss";
import CommonExample from "../common.example";

const IconExample: React.FunctionComponent = () => {
  const name = "Icon";
  const titleText = "语义化的矢量图形。";
  const usageText = "开发过程中，需要导入 logo、图标等失量图时。";
  const codeContent = [
    [
      name,
      <div>
        <Icon name="alipay" />
        <Icon name="qq" />
        <Icon name="wechat" />
      </div>,
      "组件样式",
      "将 svg 失量图下载到对应目录，根据 svg 文件的目录名就可以轻松导入 svg 图标，图标导入后，可对图标的样式进行设计。",
    ],
  ];
  const API = [
    ["name", "内嵌 Icon 图标的 name 属性", "string", "alipay"],
    ["style", "计算后的 svg 元素样式", "CSSProperties", "————"],
    ["className", "计算后的 svg 类名", "string", "————"],
  ];

  return (
    <CommonExample
      name={name}
      titleText={titleText}
      usageText={usageText}
      codeContent={codeContent}
      API={API}
      apiCodeFile={require("!!raw-loader!./icon.api.tsx")}
    />
  );
};

export default IconExample;
