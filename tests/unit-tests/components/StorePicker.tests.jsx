/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import React from "react";
import { shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import StorePicker from "../../../imports/ui/components/StorePicker";

chai.use(chaiEnzyme());

describe("<StorePicker />", function () {
  it("should display 'Please Enter A Store'", function () {
    const wrapper = shallow(<StorePicker />);
    expect(wrapper.find("h2")).to.have.text("Please Enter A Store");
  });
});
