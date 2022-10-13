/** @jest-environment jsdom */

import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import CustomRange from "../components/CustomRange";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CustomRange", () => {
  beforeAll(() => {
    render(<CustomRange />);
  });

  it("should have the right test id in document", () => {
    expect(screen.getByTestId("customrange")).toBeInTheDocument();
  });

  afterAll(cleanup);
});
