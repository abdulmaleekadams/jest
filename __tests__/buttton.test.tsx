import Button from "@/components/Button";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("ButtonComponent", () => {
  // Test for btn click event
  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} />);

    const button = screen.getByText("Click me");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(6);
  });

  //   Test for btn label change after click
  it("label change after click", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} />);

    const button = screen.getByText("Click me");
    fireEvent.click(button);

    expect(screen.getByText("Clicked!")).toBeInTheDocument();
  });

  //   Test for btn label renders with a different label
  it("label change after click", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} label="Submit" />);

    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
