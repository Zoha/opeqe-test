import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Right from "./Header/Right";
import Left from "./Header/Left";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Container>
            <div className="inner-container">
              <Left />
              <Right />
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
