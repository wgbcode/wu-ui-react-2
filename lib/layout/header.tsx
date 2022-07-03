import React from "react";
import { scopedClassMaker } from "../helpers/classes";

const sc = scopedClassMaker("gu-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Header: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={className ? sc(className) : ""} {...rest}>
      {props.children}
    </div>
  );
};

export default Header;
