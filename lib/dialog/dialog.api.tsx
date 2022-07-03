import React, { Fragment, ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import { scopedClassMaker } from "../helpers/classes";
import Icon from "../icon/icon";
import "./dialog.scss";

interface Props {
  visible: Boolean;
  title: string;
  buttons?: ReactElement[];
  onClose: () => any;
  maskClosable: Boolean;
}

const sc = scopedClassMaker("wu-dialog");
const sc1 = scopedClassMaker("wu-dialog-footer");
const Dialog: React.FC<Props> = ({
  visible,
  title,
  buttons,
  onClose,
  maskClosable,
  children,
}) => {
  const result = visible && (
    <Fragment>
      <div className={sc("wrapper")} onClick={() => maskClosable && onClose()}>
        <div className={sc("")}>
          <header className={sc("header")}>
            <div>{title}</div>
            {
              <div>
                <Icon name="" />
              </div>
            }
          </header>
          <main className={sc("main")}>{children}</main>
          <footer className={sc("footer")}>
            {buttons &&
              buttons.map((item, index) =>
                React.cloneElement(item, { key: index })
              )}
          </footer>
        </div>
      </div>
    </Fragment>
  );
  return ReactDOM.createPortal(result, document.body); // 传送门
};

const alert = (
  title: string,
  content: string | ReactNode,
  maskClosable?: Boolean,
  onEnsure?: (e: React.MouseEvent) => any
) => {
  const buttons = [
    <button
      onClick={(e) => {
        close();
        onEnsure && onEnsure(e);
      }}
      className={sc1("ensure")}
    >
      确定
    </button>,
  ];
  const close = modal(title, content, maskClosable, buttons);
};

const confirm = (
  title: string,
  content: string | ReactNode,
  maskClosable?: Boolean,
  onEnsure?: (e: React.MouseEvent) => any,
  onCancel?: (e: React.MouseEvent) => any
) => {
  const buttons = [
    <button
      onClick={(e) => {
        close();
        onEnsure && onEnsure(e);
        onCancel && onCancel(e);
      }}
      className={sc1("cancel")}
    >
      取消
    </button>,
    <button
      onClick={() => {
        close();
      }}
      className={sc1("ensure")}
    >
      确定
    </button>,
  ];
  const close = modal(title, content, maskClosable, buttons);
};

const modal = (
  title: string,
  content: string | ReactNode,
  maskClosable?: Boolean,
  buttons?: ReactElement[]
) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      title={"Declarative"}
      visible={true}
      onClose={() => close()}
      buttons={buttons}
      maskClosable={maskClosable ? maskClosable : false}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};

export default Dialog;

export { alert, confirm, modal };
