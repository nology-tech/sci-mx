import React from "react";
import { render } from "@testing-library/react";
import ProductPref from "./ProductPref";

describe("ProductPref tests", () => {
  it("should render", () => {
    expect(render(<ProductPref />)).toBeTruthy();
  });
});
