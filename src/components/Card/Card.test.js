
import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import delivery from "../../assets/delivery.svg";

describe("Card component", () => {
  // Sample data for Card props
  const sampleData = {
    title: "Pizza Margherita",
    description:
      "Classic Italian pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
    image: "pizza-image.jpg",
    price: "$10.00",
  };

  test("renders the Card component with given data", () => {
    render(<Card {...sampleData} />);

    // Check if the image is rendered with correct src and alt
    const imageElement = screen.getByAltText("food");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", sampleData.image);
    expect(imageElement).toHaveAttribute("height", "200");

    // Check if the title is rendered
    const titleElement = screen.getByText(sampleData.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText(sampleData.description);
    expect(descriptionElement).toBeInTheDocument();

    // Check if the price is rendered
    const priceElement = screen.getByText(sampleData.price);
    expect(priceElement).toBeInTheDocument();
  });
});
