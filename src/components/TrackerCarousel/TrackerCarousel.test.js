import React from "react";
import { render } from "@testing-library/react";
import TrackerCarousel from "./TrackerCarousel";

describe("TrackerCarousel tests", () => {
  it("should render", () => {
    expect(render(<TrackerCarousel />)).toBeTruthy();
  });
});
