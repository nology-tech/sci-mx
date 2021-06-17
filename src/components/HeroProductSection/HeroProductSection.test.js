import React from "react";
import { render } from "@testing-library/react";
import HeroProductSection from "./HeroProductSection";

describe("HeroProductSection tests", () => {
  it("should render", () => {
    expect(render(<HeroProductSection />)).toBeTruthy();
  });
});
