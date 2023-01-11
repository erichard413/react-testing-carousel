import { render, fireEvent } from "@testing-library/react";
import TEST_IMAGES from "./_testCommon.js";
import Card from "./Card";

it("should create a new card", ()=>{
    render(<Card caption="test-caption" src="test.jpg" currNum="1" totalNum="3"/>)
})

it('should match snapshot', ()=> {
    const {asFragment} = render(<Card caption="test-caption" src="test.jpg" currNum="1" totalNum="3"/>);
    expect(asFragment()).toMatchSnapshot();
})