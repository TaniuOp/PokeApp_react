import React from "react";
import { shallow } from "enzyme";
import Pokebouncecard from "./Pokebouncecard";

describe("Pokebouncecard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokebouncelist />);
    expect(wrapper).toMatchSnapshot();
  });
});
