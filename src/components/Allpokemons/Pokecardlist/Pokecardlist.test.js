import React from "react";
import { shallow } from "enzyme";
import Pokecardlist from "./Pokecardlist";

describe("Pokecardlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokecardlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
