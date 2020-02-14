import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Swipeable from "./Slider/Swipeable";

export default class slider extends Component {
  static defaultProps = {
    count: 3,
    onSlideChange: () => {}
  };
  defaults = {
    itemsPerSlide: 3.1,
    currentSlide: 1,
    moveSlides: 3
  };
  state = {
    itemsPerSlide: 1.2,
    moveSlides: 1,
    moveSlides: 3,
    duration: 300
  };
  breakPoints = {
    980: {
      itemsPerSlide: 2.2,
      moveSlides: 2
    },
    580: {
      itemsPerSlide: 1.2,
      moveSlides: 1
    }
  };
  swipeHandlers = {};

  constructor(props) {
    super(props);
    this.state.randomKey = Math.random()
      .toString(36)
      .substring(5);
  }

  /*
   * calculate each item width in percent using itemsPerSlide
   */
  getEachItemWidth = () => {
    return 100 / this.state.itemsPerSlide;
  };

  /*
   * get translate of slides container
   */
  getTranslate = () => {
    const { currentSlide, moveSlides } = this.state;
    return -1 * (currentSlide - 1) * moveSlides * this.getEachItemWidth();
  };

  /*
   * return last slide number
   */
  getLastSlide = () => {
    return Math.ceil(this.props.count / Math.floor(this.state.itemsPerSlide));
  };

  /*
   * move to next slide
   */
  next = async () => {
    if (!this.hasNextSlide()) {
      return;
    }
    await this.setState({
      currentSlide: this.state.currentSlide + 1
    });
    this.onSlideChange();
  };

  /*
   * move to prev slide
   */
  prev = async () => {
    if (!this.hasPrevSlide()) {
      return;
    }
    await this.setState({
      currentSlide: this.state.currentSlide - 1
    });
    this.onSlideChange();
  };

  /*
   * check that slider has prev slide
   */
  hasPrevSlide = () => {
    return this.state.currentSlide > 1;
  };

  /*
   * check that slider has next slide
   */
  hasNextSlide = () => {
    return this.state.currentSlide < this.getLastSlide();
  };

  /*
   * event when slide was changed
   */
  onSlideChange = () => {
    this.props.onSlideChange({
      lastSlide: this.getLastSlide(),
      itemsCount: this.props.count,
      currentSlide: this.state.currentSlide
    });
  };

  /*
   * update state data on breakpoints
   */
  updateStateWithBreakPoints = () => {
    let min = 0;
    for (let breakpointSize in this.breakPoints) {
      if (window.innerWidth < breakpointSize) {
        if (min == 0) {
          min = breakpointSize;
        } else if (breakpointSize < min) {
          min = breakpointSize;
        }
      }
    }
    let newData = min == 0 ? this.defaults : this.breakPoints[min];
    this.setState(newData);
    this.onSlideChange();
  };

  componentDidMount() {
    this.updateStateWithBreakPoints();
    window.addEventListener("resize", this.updateStateWithBreakPoints);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateStateWithBreakPoints);
  }

  render() {
    return (
      <div className="slider-container">
        {this.renderButtons()}
        {this.renderSlides()}
        <style>{`
          .slides-${this.state.randomKey} > * {
            display: inline-block;
            width: ${this.getEachItemWidth()}%;
          }
        `}</style>
      </div>
    );
  }

  renderButtons() {
    return (
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          top: "100px",
          width: "100%"
        }}
      >
        {this.hasPrevSlide() && (
          <Fab
            onClick={this.prev}
            size="small"
            color="primary"
            style={{
              left: -10,
              position: "absolute",
              transform: "scale(0)",
              transition: ".5s cubic-bezier(.22,.74,.47,1.47)"
            }}
          >
            <ArrowLeftIcon />
          </Fab>
        )}
        {this.hasNextSlide() && (
          <Fab
            onClick={this.next}
            size="small"
            color="primary"
            style={{
              right: -10,
              position: "absolute",
              transform: "scale(0)",
              transition: ".5s cubic-bezier(.22,.74,.47,1.47)"
            }}
          >
            <ArrowRightIcon />
          </Fab>
        )}
      </div>
    );
  }

  renderSlides() {
    return (
      <div className="slides-container">
        <Swipeable next={this.next} prev={this.prev}>
          <div
            className={`slides slides-${this.state.randomKey}`}
            style={{
              transition: `transform ${this.state.duration}ms ease-in-out`,
              transform: `translateX(${this.getTranslate()}%)`
            }}
          >
            {this.props.children}
          </div>
        </Swipeable>
      </div>
    );
  }
}
