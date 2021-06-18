import React from "react";
import { render } from "@testing-library/react";
import HeroSocials from "./HeroSocials";

describe("HeroSocials tests", () => {
  it("should render", () => {
    expect(render(<HeroSocials />)).toBeTruthy();
  });
});
