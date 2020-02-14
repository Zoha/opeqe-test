import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class RightMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          className="hide-on-small-screen"
          size="small"
          color="secondary"
          style={{ textTransform: "none", marginRight: 5 }}
        >
          Reservation
        </Button>
        <Button
          className="hide-on-small-screen"
          size="small"
          color="secondary"
          style={{ textTransform: "none", marginRight: 5 }}
        >
          Orders
        </Button>
        <Button
          className="hide-on-small-screen"
          size="small"
          color="secondary"
          style={{ textTransform: "none", marginRight: 10 }}
        >
          Locations
        </Button>
      </React.Fragment>
    );
  }
}
