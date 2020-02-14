import React, { Component } from "react";
import { Typography } from "@material-ui/core";

export default class Title extends Component {
  /**
   * get small border offset from left
   */
  getLeftOffset = () => {
    const sliderOptions = this.props.sliderOptions;
    let offset = 0;
    if (
      !sliderOptions ||
      !sliderOptions.currentSlide ||
      sliderOptions.currentSlide == 1
    ) {
      offset = 0;
    } else {
      offset = (sliderOptions.currentSlide * 100) / sliderOptions.lastSlide;
    }

    return offset;
  };

  render() {
    const { title } = this.props;
    return (
      <Typography
        variant="h6"
        component="h2"
        style={{
          borderBottom: "2px solid #eee",
          position: "relative",
          padding: "10px 0",
          fontWeight: "bold",
          overflow: "hidden"
        }}
      >
        {title}
        <span
          style={{
            position: "absolute",
            width: this.getLeftOffset() == 0 ? "60px" : "30px",
            height: "2px",
            background: "black",
            bottom: 0,
            transition: ".5s",
            left: `calc(${this.getLeftOffset()}% - 30px)`
          }}
        ></span>
      </Typography>
    );
  }
}
