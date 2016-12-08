import React from "react";
import { BrowserRouter, Match, Miss } from "react-router";
import App from "../ui/components/App";
import StorePicker from "../ui/components/StorePicker";
import NotFound from "../ui/components/NotFound";

const routes = (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={StorePicker} />
      <Match pattern="/store/:storeId" component={App} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
);

export default routes;
