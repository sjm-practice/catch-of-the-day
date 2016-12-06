import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import StorePicker from "../imports/ui/components/StorePicker";

Meteor.startup(() => {
  render(<StorePicker />, document.getElementById("render-target"));
});
