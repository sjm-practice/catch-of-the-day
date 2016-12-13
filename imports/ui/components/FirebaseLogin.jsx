import React, {
  Component,
  PropTypes,
} from "react";
import base from "../../config/base";

class FirebaseLogin extends Component {
  constructor() {
    super();
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  authenticate() {
    console.log("Custom Login Attempt");
    base.authWithPassword({ email: "test@user.com", password: "abc123" }, this.authHandler);
  }

  authHandler(err, authData) {
    console.log("Custom Login Response:", { err, authData });
  }

  render() {
    return (
      <div>
        <input className="custom-login" type="text" placeholder="Email" />
        <input className="custom-login" type="text" placeholder="Password" />
        <button className="custom-login" onClick={() => this.authenticate()}>Firebase Login</button>
      </div>
    );
  }
}

FirebaseLogin.propTypes = {};

export default FirebaseLogin;
