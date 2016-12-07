import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "../imports/ui/components/App";
import StorePicker from "../imports/ui/components/StorePicker";

Meteor.startup(() => {
  render(<App />, document.getElementById("render-target"));
});
