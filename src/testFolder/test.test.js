import { render, screen } from "@testing-library/react";
import { Test, sum } from "./test";

// test("test file", () => {
//   render(<Test />);
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument();
// });

it("sums numbers", () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});

it("renders welcome message", () => {
  render(<Test />);
  expect(screen.getByTestId(/Hello/i)).toBeTruthy();
});
 
test("Hello",()=>{
  expect(sum(1, 2)).toEqual(3);
})

