import React from "react";
import { render } from "@testing-library/react";
import Tracker from "./Tracker";

describe("Tracker tests", () => {
  it("should render", () => {
    expect(render(<Tracker />)).toBeTruthy();
  });
});
