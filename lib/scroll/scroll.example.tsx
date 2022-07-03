import React from "react";
import Scroll from "./scroll";
import "./scroll.example.scss";
import CommonExample from "../common.example";

const ScrollExample: React.FC = () => {
  const onPull = () => {
    console.log("调用下拉更新函数");
  };
  const name = "Scroll";
  const titleText = "自定义滚动条。";
  const usageText =
    "当需要使用自定义滚动条代替浏览器自带滚动条或者在移动端需实现下拉更新功能时。";
  const codeContent = [
    [
      name,
      <Scroll onPull={onPull}></Scroll>,
      "组件用法",
      "自定义滚动条默认隐藏，当滑动时显示，自定义滚动条也可直接拉住进而上下滚动，另外，该组件实现了在移动端下拉更新功能（PC 端操作时需可触屏）。",
    ],
  ];
  const API = [
    ["className", "自定义外层容器类名", "string", "————"],
    ["onPull", "移动端下拉更新回调函数", "()=>void", "————"],
    [
      "height",
      "经计算的得到的当前屏幕的 scrollHeight、viewHeight、scrollTop",
      "object",
      "————",
    ],
    ["barHeight", "自定义滚动条的当前高度", "number", "————"],
    ["barTop", "自定义滚动条距离顶部的当前高度", "number", "————"],
    ["barVisibl", "自定义滚动条是否可见", "boolean", "false"],
    ["pullBoxHeightY", "下拉更新时盒子的当前高度（移动端）", "number", "0"],
  ];

  return (
    <CommonExample
      name={name}
      titleText={titleText}
      usageText={usageText}
      codeContent={codeContent}
      API={API}
      apiCodeFile={require("!!raw-loader!./scroll.api.tsx")}
    />
  );
};

export default ScrollExample;
