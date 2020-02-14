import React, { Component } from "react";
import Title from "./Carousel/Title";
import SliderItem from "./Carousel/SliderItem";
import Slider from "./Carousel/Slider";

export default class FoodCarousel extends Component {
  static defaultProps = {
    title: "something",
    items: []
  };
  state = {
    sliderOptions: {}
  };
  constructor(props) {
    super(props);
  }
  onSlideChange = options => {
    this.setState({ sliderOptions: options });
  };
  render() {
    return (
      <div>
        <Title
          title={this.props.title}
          sliderOptions={this.state.sliderOptions}
        />
        <div style={{ padding: "20px 0 40px" }}>
          <Slider
            count={this.props.items.length}
            onSlideChange={this.onSlideChange}
          >
            {this.props.items.map((i, k) => (
              <SliderItem key={this.props.title + k} {...i} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
