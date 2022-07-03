import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";
import "./dialog.example.scss";
import CommonExample from "../common.example";
import { scopedClassMaker } from "../helpers/classes";

const DialogExample: React.FunctionComponent<any> = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  const sc1 = scopedClassMaker("wu-dialog-footer");
  const name = "Dialog";
  const titleText = "弹出一个对话框。";
  const usageText = "需要与用户交互，同时避免中断用户的操作流程时。";
  const codeContent = [
    [
      name + 1,
      <>
        <div>
          <button onClick={() => setX(!x)}>confirm 组件</button>
          <Dialog
            title="Declarative"
            visible={x}
            onClose={() => setX(false)}
            buttons={[
              <button
                onClick={() => {
                  setX(false);
                }}
                className={sc1("cancel")}
              >
                取消
              </button>,
              <button
                onClick={() => {
                  setX(false);
                }}
                className={sc1("ensure")}
              >
                确定
              </button>,
            ]}
            maskClosable={false}
          >
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
          </Dialog>
        </div>
        <div>
          <button onClick={() => setY(!y)}>alert 组件</button>
          <Dialog
            title="Declarative"
            visible={y}
            onClose={() => setY(false)}
            buttons={[
              <button
                onClick={() => {
                  setY(false);
                }}
                className={sc1("ensure")}
              >
                确定
              </button>,
            ]}
            maskClosable={false}
          >
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
          </Dialog>
        </div>

        <div>
          <button onClick={() => setZ(!z)}>modal 组件</button>
          <Dialog
            title="Declarative"
            visible={z}
            onClose={() => {
              setZ(false);
            }}
            maskClosable={true}
          >
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
          </Dialog>
        </div>
      </>,
      "组件式使用",
      "Dialog 对话框有 confirm、alert、modal 三种形式，每种形式的对话框都通过 visible 属性来控制显示/隐藏。",
    ],
    [
      name + 2,
      <>
        <div>
          <button
            onClick={() =>
              confirm(
                "Declarative",
                <>
                  <div>Some contents...</div>
                  <div>Some contents...</div>
                  <div>Some contents...</div>
                </>
              )
            }
          >
            confirm()
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              alert(
                "Declarative",
                <>
                  <div>Some contents...</div>
                  <div>Some contents...</div>
                  <div>Some contents...</div>
                </>
              )
            }
          >
            alert()
          </button>
        </div>

        <div>
          <button
            onClick={() =>
              modal(
                "Declarative",
                <>
                  <div>Some contents...</div>
                  <div>Some contents...</div>
                  <div>Some contents...</div>
                </>,
                true
              )
            }
          >
            modal()
          </button>
        </div>
      </>,
      "函数式使用",
      "点击按钮会弹出一个对话框，三种形式的 Dialog 组件已被封装成函数式，根据传入的参数可以自定义对话框的 title、content、button等。",
    ],
  ];
  const API = [
    ["visible", "对话框是否可见", "boolean", "false"],
    ["title", "标题", "string", "————"],
    ["content/children", "对话框提示内容", "string | ReactNode", "————"],
    ["button", "对话框按钮", "ReactElement[]", "————"],
    ["onConfim", "点击确认按钮时的回调", "e: React.MouseEvent => any", "————"],
    ["onCancel", "点击取消按钮时的回调", "e: React.MouseEvent => any", "————"],
    [
      "maskClosable",
      "点击蒙层是否关闭 Modal（相当于点击取消按钮）",
      "boolean",
      "false",
    ],
    ["onClose", "关闭对话框完全关闭", "()=>any", "————"],
  ];
  return (
    <CommonExample
      name={name}
      titleText={titleText}
      usageText={usageText}
      codeContent={codeContent}
      API={API}
      apiCodeFile={require("!!raw-loader!./dialog.api.tsx")}
    />
  );
};

export default DialogExample;
