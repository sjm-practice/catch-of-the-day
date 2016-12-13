import React, {
  Component,
  PropTypes,
} from "react";
import base from "../../config/base";

class FirebaseLogin extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Custom Login Attempt");
    base.authWithPassword(
      {
        email: this.email.value,
        password: this.password.value,
      },
      this.authHandler);
    this.firebaseLoginForm.reset();
  }

  authHandler(err, authData) {
    console.log("Custom Login Response:", { err, authData });

    let uid = null;
    if (!err) {
      uid = authData.uid || null;
    }
    this.props.handleLogin(uid);
  }

  render() {
    return (
      <form
        ref={(input) => { this.firebaseLoginForm = input; }}
        onSubmit={this.handleSubmit}
      >
        <input
          ref={(input) => { this.email = input; }}
          className="custom-login"
          type="text"
          placeholder="Email"
        />
        <input
          ref={(input) => { this.password = input; }}
          className="custom-login"
          type="text"
          placeholder="Password"
        />
        <button className="custom-login" type="submit">Firebase Login</button>
      </form>
    );
  }
}

FirebaseLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default FirebaseLogin;
