import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import FormExample from "./lib/form/form.example";
import ScrollExample from "./lib/scroll/scroll.example";
import Icon from "./lib/icon/icon";
import { scopedClassMaker } from "./lib/helpers/classes";
import "./example.scss";

const sc = scopedClassMaker("wu-webPage");
const sc1 = scopedClassMaker("wu-webPage-navBar");
const sc2 = scopedClassMaker("wu-webPage-content");
ReactDOM.render(
  <Router>
    <div className="wu-webPage">
      <header className={sc("navBar")}>
        <div className={sc1("header")}>
          <div className={sc1("header-icon")}>
            <Icon name="UILogo" />
          </div>
          <h2 className={sc1("header-text")}>Wu-UI-React</h2>
        </div>
        <a
          className={sc1("footer")}
          href="https://github.com/wgbcode/wu-ui-react-2"
        >
          <Icon name="github" />
        </a>
      </header>
      <div className={sc("content")}>
        <aside className={sc2("aside")}>
          <h1 className={sc2("aside-title")}>组件总览</h1>
          <ul className={sc2("aside-nav")}>
            <li>
              <NavLink to="/button" activeClassName="active">
                Button 按钮
              </NavLink>
            </li>
            <li>
              <NavLink to="/icon" activeClassName="active">
                Icon 图标
              </NavLink>
            </li>
            <li>
              <NavLink to="/dialog" activeClassName="active">
                Dialog 对话框
              </NavLink>
            </li>
            <li>
              <NavLink to="/layout" activeClassName="active">
                Layout 布局
              </NavLink>
            </li>
            <li>
              <NavLink to="/form" activeClassName="active">
                Form 表单
              </NavLink>
            </li>
            <li>
              <NavLink to="/scroll" activeClassName="active">
                Scroll 滚动条
              </NavLink>
            </li>
          </ul>
        </aside>
        <main className={sc2("main")}>
          <Route path="/button" component={ButtonExample} />
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
          <Route path="/scroll" component={ScrollExample} />
          <Route exact path="/" component={ButtonExample} />
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector("#root")
);

window.addEventListener("resize", () => {
  const clientWidth = document.body.clientWidth;
  const main = document.querySelector(
    ".wu-webPage-content-main"
  ) as HTMLElement;
  if (clientWidth >= 1500) main.style.padding = "48px 100px";
  else main.style.padding = "48px 16px";
});
