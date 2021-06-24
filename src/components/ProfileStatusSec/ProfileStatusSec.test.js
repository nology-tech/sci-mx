import React from "react";
import { render } from "@testing-library/react";
import ProfileStatusSec from "./ProfileStatusSec";

describe("ProfileStatusSec tests", () => {
  it("should render", () => {
    expect(render(<ProfileStatusSec />)).toBeTruthy();
  });
});
