import * as React from "react";
import classes, { scopedClassMaker } from "../helpers/classes";
import "./button.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  type?: string;
  ghost?: Boolean;
  loading?: Boolean;
  onLoading?: () => void;
  callBack?: React.MouseEventHandler;
}

const Button: React.FC<Props> = (props) => {
  const { className, type, ghost, onLoading, callBack } = props;
  const sc = scopedClassMaker("wu-button");
  return (
    <button
      className={classes(
        sc(""),
        className ? className : "",
        type ? sc(type) : sc("default"),
        ghost && sc("ghost")
      )}
      onClick={(e) => {
        onLoading && onLoading();
        callBack && callBack(e);
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
