import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("App component rendering test", () => {
  render(<App />);
  const dataGridElement = screen.getByRole("grid");
  expect(dataGridElement).toBeInTheDocument();
});
