import React from "react";
import { render } from "@testing-library/react";
import WorkoutCard from "./WorkoutCard";

describe("WorkoutCard tests", () => {
  it("should render", () => {
    expect(render(<WorkoutCard />)).toBeTruthy();
  });
});
