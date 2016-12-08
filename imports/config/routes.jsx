import React from "react";
import { BrowserRouter, Match, Miss } from "react-router";
import App from "../ui/components/App";
import StorePicker from "../ui/components/StorePicker";

const routes = (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={StorePicker} />
      <Match pattern="/store/:storeId" component={App} />
    </div>
  </BrowserRouter>
);

export default routes;
