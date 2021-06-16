import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./LandingPage";

describe("Landing tests", () => {
  it("should render", () => {
    expect(render(<LandingPage />)).toBeTruthy();
  });
});
