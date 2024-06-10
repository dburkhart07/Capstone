import React from "react";
import { render, screen } from "@testing-library/react";
import Reviews from "./Reviews";

describe("Reviews component", () => {
  test("renders the review cards", () => {
    render(<Reviews />);
    
    // Check if the review cards are rendered
    const reviewCards = screen.getAllByTestId("review-card");
    expect(reviewCards).toHaveLength(3);
  });
});