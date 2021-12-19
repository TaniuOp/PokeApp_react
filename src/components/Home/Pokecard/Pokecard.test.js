import React from "react";
import { shallow } from "enzyme";
import Pokecard from "./Pokecard";

describe("Pokecard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokecard />);
    expect(wrapper).toMatchSnapshot();
  });
});
