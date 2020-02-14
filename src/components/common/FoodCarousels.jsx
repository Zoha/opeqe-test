import React, { Component } from "react";
import Carousel from "./FoodCarousel";
import Loader from "./Carousel/Loader";
import { Container } from "@material-ui/core";
import axios from "axios";

export default class FoodCarousels extends Component {
  state = {
    groups: null
  };

  getGroups = () => {
    axios
      .get("/json/content.json")
      .then(({ data }) => {
        const groups = {};
        for (let item of data) {
          let key = item.courseType.title;
          groups[key] = groups[key] || [];
          groups[key].push(item);
        }

        this.setState({
          groups
        });
      })
      .catch(e => {
        console.log(e);
        // handle error in real app
      });
  };
  componentDidMount() {
    this.getGroups();
  }

  render() {
    return (
      <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        {this.state.groups ? this.renderCarousels() : <Loader />}
      </Container>
    );
  }

  renderCarousels = () => {
    return Object.keys(this.state.groups).map(i => (
      <Carousel key={i} title={i} items={this.state.groups[i]} />
    ));
  };
}
