/* global localStorage */

import React, {
  Component,
} from "react";
import base from "../../config/base";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../../utils/sampleFishes";
import Fish from "./Fish";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {},
    };

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
  }

  componentWillMount() {
    // this runs right before App is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
      {
        context: this,
        state: "fishes",
      });

    // check if there exists an order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`,
      JSON.stringify(nextState.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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

  addToOrder(index) {
    // copy state
    const order = this.state.order;
    // add new order
    order[index] = order[index] + 1 || 1;
    // update state
    this.setState({ order });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes,
    });
  }

  removeFish(key) {
    const fishes = { ...this.state.fishes };
    fishes[key] = null; // setting to null is done or firebase, else could also use 'delete'
    this.setState({ fishes });
  }

  updateFish(key, updatedFish) {
    const fishes = { ...this.state.fishes }; // get copy of current fishes state
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  //
  // NOTE: This should become a container, and create a presentational component
  //
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
                .map(key => <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />)
            }
          </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes} />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
        />
      </div>
    );
  }
}

export default App;
