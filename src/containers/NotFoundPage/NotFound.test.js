import React from "react";
import { render } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("NotFound tests", () => {
  it("should render", () => {
    expect(render(<NotFoundPage />)).toBeTruthy();
  });
});
