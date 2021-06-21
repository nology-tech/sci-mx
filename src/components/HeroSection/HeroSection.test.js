import React from "react";
import { render } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("LandingPageSection tests", () => {
  it("should render", () => {
    expect(render(<HeroSection />)).toBeTruthy();
  });
});
