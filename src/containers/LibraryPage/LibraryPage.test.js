import React from "react";
import { render } from "@testing-library/react";
import LibraryPage from "./LibraryPage";

describe("LibraryPage tests", () => {
  it("should render", () => {
    expect(render(<LibraryPage />)).toBeTruthy();
  });
});
