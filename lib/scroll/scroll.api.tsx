import React, { useEffect, useRef, useState } from "react";
import classes, { scopedClassMaker } from "../helpers/classes";
import "./scroll.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  onPull: () => void;
}

const Scroll: React.FC<Props> = (props) => {
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const [barVisible, setBarVisible] = useState(false);
  const [pullBoxHeightY, setPullBoxHeightY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const firstYRef = useRef(0);
  const firstTouchYRef = useRef(0);
  const firstBarTopRef = useRef(0);
  const timeIdRef = useRef<null | number>(null);
  const pullingRef = useRef(false);
  useEffect(() => {
    setBarHeight(
      (height().viewHeight * height().viewHeight) / height().scrollHeight
    );
    document.addEventListener("mouseup", onMouseUpBar);
    document.addEventListener("mousemove", onMouseMoveBar);
    document.addEventListener("select", onSelected);
    return () => {
      document.removeEventListener("mouseup", onMouseUpBar);
      document.removeEventListener("mousemove", onMouseMoveBar);
      document.removeEventListener("select", onSelected);
    };
  });
  const height = () => {
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    const scrollTop = containerRef.current!.scrollTop;
    return { scrollHeight, viewHeight, scrollTop };
  };
  const setBarTop = (number: number) => {
    const maxBarTop =
      ((height().scrollHeight - height().viewHeight) * height().viewHeight) /
      height().scrollHeight;
    if (number > maxBarTop) return;
    if (number < 0) return;
    _setBarTop(number);
  };
  const scrollbarWidth = () => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = div.style.left = "-9999px"; // 把 div 放到屏幕之外，防止影响用户
    div.style.width = div.style.height = "100px";
    div.style.overflow = "scroll";
    document.body.appendChild(div);
    const width = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return width;
  };
  const onScroll = () => {
    setBarVisible(true);
    setBarTop(
      (height().scrollTop * height().viewHeight) / height().scrollHeight
    );
    if (timeIdRef.current) {
      window.clearTimeout(timeIdRef.current);
    }
    timeIdRef.current = window.setTimeout(() => {
      setBarVisible(false);
    }, 1500);
  };
  const onMouseDownBar = (e: React.MouseEvent) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstBarTopRef.current + delta;
      setBarTop(newBarTop);
      containerRef.current!.scrollTop =
        (newBarTop * height().scrollHeight) / height().viewHeight;
    }
  };
  const onMouseUpBar = () => {
    draggingRef.current = false;
  };
  const onSelected = (e: MouseEvent) => {
    if (containerRef.current) {
      e.preventDefault();
    }
  };
  const onTouchStart = (e: React.TouchEvent) => {
    const scrollTop = height().scrollTop;
    if (scrollTop !== 0) return;
    firstTouchYRef.current = e.touches[0].screenY;
    pullingRef.current = true;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const deltaY = e.touches[0].screenY - firstTouchYRef.current;
    if (deltaY < 0) return;
    if (deltaY > 50) return;
    setPullBoxHeightY(deltaY);
  };
  const onTouchEnd = () => {
    if (pullingRef.current) {
      props.onPull();
      pullingRef.current = false;
      setPullBoxHeightY(0);
    }
  };
  const sc = scopedClassMaker("wu-scroll");
  return (
    <div className={classes(props.className, sc(""))}>
      <div
        className={sc("item")}
        style={{
          right: -scrollbarWidth(),
        }}
        onScroll={onScroll}
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={sc("item-pulling")}
          style={{ height: `${pullBoxHeightY}px` }}
        >
          {pullBoxHeightY > 20 ? "下拉更新，调用 onPull 函数。" : ""}
        </div>
        <p>scroll - 1</p>
        <p>scroll - 2</p>
        <p>scroll - 3</p>
        <p>scroll - 4</p>
        <p>scroll - 5</p>
        <p>scroll - 6</p>
        <p>scroll - 7</p>
        <p>scroll - 8</p>
        <p>scroll - 9</p>
        <p>scroll - 10</p>
        <p>scroll - 11</p>
        <p>scroll - 12</p>
        <p>scroll - 13</p>
        <p>scroll - 14</p>
        <p>scroll - 15</p>
        <p>scroll - 16</p>
        <p>scroll - 17</p>
        <p>scroll - 18</p>
        <p>scroll - 19</p>
        <p>scroll - 20</p>
        <p>scroll - 21</p>
        <p>scroll - 22</p>
        <p>scroll - 23</p>
        <p>scroll - 24</p>
        <p>scroll - 25</p>
        <p>scroll - 26</p>
        <p>scroll - 27</p>
        <p>scroll - 28</p>
        <p>scroll - 29</p>
        <p>scroll - 30</p>
      </div>
      {barVisible && (
        <div
          className={sc("bar")}
          style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
          onMouseDown={onMouseDownBar}
        ></div>
      )}
    </div>
  );
};

export default Scroll;
