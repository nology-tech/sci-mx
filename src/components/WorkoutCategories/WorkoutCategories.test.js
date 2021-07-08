import React from "react";
import { render } from "@testing-library/react";
import WorkoutCategories from "./WorkoutCategories";

describe("WorkoutCategories tests", () => {
  it("should render", () => {
    expect(render(<WorkoutCategories />)).toBeTruthy();
  });
});
