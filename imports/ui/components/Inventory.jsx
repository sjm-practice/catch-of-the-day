import React, {
  Component,
} from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];

    // take a copy of fish, and update it with new value (using spread,
    // using spread creates a new object (could have used Object.assign({}, fish)
    const updatedFish = {
      ...fish,                         // makes copy of orig fish object
      [e.target.name]: e.target.value, // overwrites/updates the name property with new value
      // note, that is the name of the target, not fish object's name property, so
      // this work with any of the updated inputs (desc, price, image, ...)
    };
    this.props.updateFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];

    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          name="name"
          value={fish.name}
          placeholder="Fish name"
          onChange={e => this.handleChange(e, key)}
        />

        <input
          type="text"
          name="price"
          value={fish.price}
          placeholder="Fish price"
          onChange={e => this.handleChange(e, key)}
        />

        <select
          type="text"
          name="status"
          value={fish.status}
          placeholder="Fish status"
          onChange={e => this.handleChange(e, key)}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea
          type="text"
          name="desc"
          value={fish.desc}
          placeholder="Fish desc"
          onChange={e => this.handleChange(e, key)}
        />

        <input
          type="text"
          name="image"
          value={fish.image}
          placeholder="Fish image"
          onChange={e => this.handleChange(e, key)}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Samples</button>
      </div>
    );
  }
}

export default Inventory;
