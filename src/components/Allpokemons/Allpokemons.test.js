import React from "react";
import { shallow } from "enzyme";
import Allpokemons from "./Allpokemons";

describe("Allpokemons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Allpokemons />);
    expect(wrapper).toMatchSnapshot();
  });
});
