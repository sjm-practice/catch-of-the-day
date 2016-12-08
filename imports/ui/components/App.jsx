import React, {
  Component,
} from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {},
    };

    this.addFish = this.addFish.bind(this);
  }

  addFish(fish) {
    // save current fishes state (current list of fishes)
    const fishes = { ...this.state.fishes };
    // get timestamp to create a unique key for the new fish
    const timestamp = Date.now();
    // add the new fish to the fishes object (list of fishes)
    fishes[`fish-${timestamp}`] = fish;
    // set the new fishes state
    this.setState({ fishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
