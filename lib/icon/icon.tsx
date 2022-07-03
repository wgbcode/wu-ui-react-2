import React from "react";
import "./importIcons"; // icons 目录文件一次性导入
import "./icon.scss";
import classes from "../helpers/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  style,
  ...restProps
}) => {
  return (
    <svg className={classes("fui-icon", className)}>
      <use xlinkHref={`#${name}`} style={style} {...restProps} />
    </svg>
  );
};

export default Icon;
