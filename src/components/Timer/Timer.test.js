import React from "react";
import { render } from "@testing-library/react";
import Timer from "./Timer";

describe("Timer tests", () => {
  it("should render", () => {
    expect(render(<Timer />)).toBeTruthy();
  });
});
