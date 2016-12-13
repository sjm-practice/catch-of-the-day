import React, {
  Component,
  PropTypes,
} from "react";
import base from "../../config/base";
import FirebaseLogin from "./FirebaseLogin";
import AddFishForm from "./AddFishForm";

class Inventory extends Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      uid: null,
      owner: null,
    };
  }

  authenticate(provider) {
    console.log("provider:", provider);
    if (provider === "custom") {
      console.log("using authWithPassword");
      base.authWithPassword({ email: "test@user.com", password: "abc123" }, this.authHandler);
    } else {
      base.authWithOAuthPopup(provider, this.authHandler);
    }
  }

  authHandler(err, authData) {
    console.log({ err, authData });
    if (err) {
      console.error("auth error:", err);
      return;
    }

    this.handleLogin(authData.user.uid);
  }

  handleLogin(uid) {
    if (!uid) {
      return;
    }

    // get store info, directly from firebase database - see firebase docs
    const storeRef = base.database().ref(this.props.storeId);
    storeRef.once("value", (snapshot) => {
      // get the store data
      const data = snapshot.val() || {};

      // if the store does not yet have an owner, assign this user as the owner
      //  [the first person to log in to any unowned store, becomes the owner]
      if (!data.owner) {
        storeRef.set({
          owner: uid,
        });
      }
    });
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

  renderLogin() {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>{`Sign in to manage your store's inventory`}</p>
        <button className="github" onClick={() => this.authenticate("github")}>Login with Github</button>
        <button className="facebook" onClick={() => this.authenticate("facebook")}>Login with Facebook</button>
        <FirebaseLogin handleLogin={this.handleLogin} />
      </nav>
    );
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

        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    );
  }

  render() {
    const logOut = <button>Log Out</button>;

    // see if user is logged in
    if (!this.state.uid) {
      return (
        <div>{this.renderLogin()}</div>
      );
    }

    // see if user is the owner of the current store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you are not the owner of this store!</p>
          {logOut}
        </div>
      );
    }

    return (
      <div>
        <h2>Inventory</h2>
        {logOut}
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Samples</button>
      </div>
    );
  }
}

Inventory.propTypes = {
  loadSamples: PropTypes.func.isRequired,
  addFish: PropTypes.func.isRequired,
  removeFish: PropTypes.func.isRequired,
  updateFish: PropTypes.func.isRequired,
  fishes: PropTypes.object.isRequired,
  storeId: PropTypes.string.isRequired,
};

export default Inventory;
