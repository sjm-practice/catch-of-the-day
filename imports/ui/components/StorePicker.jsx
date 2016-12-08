import React, {
  Component,
} from "react";
import { getFunName } from "../../utils/helpers";

class StorePicker extends Component {
  goToStore(event) {
    event.preventDefault();
    console.log("input:", this.storeInput.value);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={e => this.goToStore(e)}>
        { /* a comment in JSX - must be inside a parent element */ }
        <h2>Please Enter A Store</h2>
        { /* see readme for explanation of using ref with a function */ }
        <input
          type="text"
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={(input) => { this.storeInput = input; }}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
