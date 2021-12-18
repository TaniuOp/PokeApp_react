import React from "react";
import { shallow } from "enzyme";
import Pokebouncelist from "./Pokebouncelist";

describe("Pokebouncelist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokebouncelist />);
    expect(wrapper).toMatchSnapshot();
  });
});
