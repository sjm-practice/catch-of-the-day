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
      ...fish,                           // makes copy of orig fish object
      [e.target.name]: e.target.value, // overwrites/updates the name property with new value
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
        <input type="text" name="price" value={fish.price} placeholder="Fish price" />

        <select type="text" name="status" value={fish.status} placeholder="Fish status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <input type="text" name="desc" value={fish.desc} placeholder="Fish desc" />

        <input type="text" name="image" value={fish.image} placeholder="Fish image" />
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
