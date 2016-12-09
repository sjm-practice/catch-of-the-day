import React, {
  Component,
} from "react";
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

  loadSamples() {
    this.setState({
      fishes: sampleFishes,
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;
