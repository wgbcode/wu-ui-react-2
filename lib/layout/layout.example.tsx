import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import CommonExample from "../common.example";
import { scopedClassMaker } from "../helpers/classes";
import "./layout.example.scss";

export default function () {
  const sc = scopedClassMaker("wu-layout-example-code-content-items-layout");
  const name = "Layout";
  const titleText = "页面的基本布局。";
  const usageText = "制作网页需要对页面进行布局时。";
  const codeContent = [
    [
      name,
      <>
        <div className={sc("")}>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </div>
        <div className={sc("")}>
          <Layout>
            <Header className="x">header</Header>
            <Layout>
              <Aside className="z">aside</Aside>
              <Content className="y">content</Content>
            </Layout>
            <Footer className="x">footer</Footer>
          </Layout>
        </div>
        <div className={sc("")}>
          <Layout>
            <Header className="x">header</Header>
            <Layout>
              <Content className="y">content</Content>
              <Aside className="z">aside</Aside>
            </Layout>
            <Footer className="x">footer</Footer>
          </Layout>
        </div>
        <div className={sc("")}>
          <Layout>
            <Aside className="z">aside</Aside>
            <Layout>
              <Header className="x">header</Header>
              <Content className="y">content</Content>
              <Footer className="x">footer</Footer>
            </Layout>
          </Layout>
        </div>
      </>,
      "基本结构",
      "根据有无 Aside，以及 Aside 的位置，可以将页面布局分为上述四种基本形式。",
    ],
  ];
  const API = [
    ["className", "容器 className", "string", "————"],
    [
      "hasSider",
      " 判断子元素里是否有 Sider，但不需要主动传参。",
      "boolean",
      "————",
    ],
  ];

  return (
    <CommonExample
      name={name}
      titleText={titleText}
      usageText={usageText}
      codeContent={codeContent}
      API={API}
      apiCodeFile={require("!!raw-loader!./layout.api.tsx")}
    />
  );
}
