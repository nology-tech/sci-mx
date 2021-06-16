import React from "react";
import { render } from "@testing-library/react";
import WorkoutPage from "./WorkoutPage";

describe("WorkoutPage tests", () => {
  it("should render", () => {
    expect(render(<WorkoutPage />)).toBeTruthy();
  });
});
