import React, { Component } from "react";

class AddFishForm extends Component {
  createFish(event) {
    event.preventDefault();
    console.log("creating a fish!");
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={e => this.createFish(e)}>
        <input type="text" placeholder="Fish Name"/>
        <input type="text" placeholder="Fish Price"/>
        <select>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea placeholder="Fish Desc"/>
        <input type="text" placeholder="Fish Image"/>
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

export default AddFishForm;
