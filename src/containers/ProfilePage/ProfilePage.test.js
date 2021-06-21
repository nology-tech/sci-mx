import React from "react";
import { render } from "@testing-library/react";
import ProfilePage from "./ProfilePage";

describe("ProfilePage tests", () => {
  it("should render", () => {
    expect(render(<ProfilePage />)).toBeTruthy();
  });
});
