import * as renderer from "react-test-renderer";
import React from "react";
import Button from "../button/button.example";

describe("button", () => {
  it("button 测试", () => {
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
