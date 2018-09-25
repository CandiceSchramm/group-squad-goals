import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments/Payments";

class Nav extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <Link to="/auth/google">Login With Google</Link>
          </div>
        );
      default:
        return (
          <div>
            <Payments />
            <Link to="/api/logout">Logout</Link>
          </div>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav nav-pills bg-info text-white">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            #SquadGoals
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Nav);
