import React, {
  Component,
  PropTypes,
} from "react";

class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
        { /* a comment in JSX - must be inside a parent element */ }
        <h2>Please Enter A Store</h2>
        <input type="text" placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

StorePicker.propTypes = {};
StorePicker.defaultProps = {};

export default StorePicker;
