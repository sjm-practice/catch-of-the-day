import React, { PropTypes, Component } from "react";
import { getFunName } from "../../utils/helpers";

class StorePicker extends Component {
  constructor() {
    super();
    // binding this to the method, so 'this' will be available in callback
    //   for more info, see bidning note in readme
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
    event.preventDefault();
    const storeId = this.storePickerInput.value;
    console.log("changing route to:", storeId);
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        { /* a comment in JSX - must be inside a parent element */ }
        <h2>Please Enter A Store</h2>
        { /* see readme for explanation of using ref with a function */ }
        <input
          type="text"
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={(input) => { this.storePickerInput = input; }}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

// add the router to context, for access to router later
StorePicker.contextTypes = {
  router: PropTypes.object,
};

export default StorePicker;
