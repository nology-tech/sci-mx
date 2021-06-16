import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm tests", () => {
  it("should render", () => {
    expect(render(<LoginForm />)).toBeTruthy();
  });
});
