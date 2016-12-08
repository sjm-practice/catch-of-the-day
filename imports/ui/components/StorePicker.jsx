import React, {
  Component,
} from "react";
import { getFunName } from "../../utils/helpers";

class StorePicker extends Component {
  goToStore(event) {
    event.preventDefault();
    console.log("submitted!");
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        { /* a comment in JSX - must be inside a parent element */ }
        <h2>Please Enter A Store</h2>
        <input type="text" placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
