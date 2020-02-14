import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import RightMenu from "./RightMenu";

export default class Right extends Component {
  render() {
    return (
      <div className="header-right-section">
        <RightMenu />

        <Button
          variant="contained"
          size="small"
          color="secondary"
          style={{ borderRadius: 25, textTransform: "none", marginRight: 5 }}
        >
          Sign Up
        </Button>

        <Button
          variant="outlined"
          size="small"
          color="primary"
          style={{ borderRadius: 25, textTransform: "none", marginRight: 5 }}
        >
          Sign Up
        </Button>

        <IconButton color="primary">
          <ShoppingBasketIcon />
        </IconButton>
      </div>
    );
  }
}
