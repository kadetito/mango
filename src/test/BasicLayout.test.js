/** @jest-environment jsdom */

import BasicLayout from "../layouts/BasicLayout";
import React from "react";
import { screen, render, cleanup } from "@testing-library/react";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("BasicLayout", () => {
  beforeAll(() => {
    render(<BasicLayout />);
  });

  it("should have the right test id in document", () => {
    expect(screen.getByTestId("basiclayout")).toBeInTheDocument();
  });

  afterAll(cleanup);
});
