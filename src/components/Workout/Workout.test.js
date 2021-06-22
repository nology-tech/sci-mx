import React from "react";
import { render } from "@testing-library/react";
import Workout from "./Workout";

describe("Workout tests", () => {
  it("should render", () => {
    expect(render(<Workout />)).toBeTruthy();
  });
});
