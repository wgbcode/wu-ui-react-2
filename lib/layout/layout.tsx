import React, { ReactElement } from "react";
import classes from "../helpers/classes";
import "./layout.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Layout: React.FC<Props> = ({ className, children, ...rest }) => {
  const hasAside = (children as ReactElement[])
    .map((item) => item.props.children)
    .includes("aside"); // 判断子代是否有 aside 元素，并据此布局样式。
  return (
    <div
      className={classes(
        className,
        hasAside ? "wu-layout-hasAside" : "wu-layout-noAside"
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Layout;
