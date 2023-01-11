import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// smoke test
it("renders component without error", ()=> {
  render(<Carousel photos={TEST_IMAGES} title="testing"/>)
})

// snapshot test
it('should match snapshot', ()=> {
  const {asFragment} = render(<Carousel photos={TEST_IMAGES} title="testing"/>);
  expect(asFragment()).toMatchSnapshot();
})
// to test left arrow -> from second image
it('should move to previous image', ()=> {
  const { container } = render(<Carousel photos={TEST_IMAGES} title="testing"/>)
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  fireEvent.click(rightArrow);
  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  fireEvent.click(leftArrow);
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
})
// left arrow should be hidden on image #1
it('should not show left arrow', ()=> {
  const { container } = render(<Carousel photos={TEST_IMAGES} title="testing"/>)
  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  expect(leftArrow).toBe(null);
  expect(leftArrow).not.toBeInTheDocument;
})
// right arrow should be hidden on image #3
it('should not show left arrow', ()=> {
  const { container } = render(<Carousel photos={TEST_IMAGES} title="testing"/>)
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  fireEvent.click(rightArrow);  
  fireEvent.click(rightArrow);  
  expect(rightArrow).not.toBeInTheDocument;
})