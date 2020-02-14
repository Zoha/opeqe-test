import React, { Component } from "react";
import { Typography, Link } from "@material-ui/core";
import AvTimerIcon from "@material-ui/icons/AvTimer";

export default class SliderItem extends Component {
  render() {
    return (
      <div style={{ padding: "10px 10px 10px 0" }}>
        {this.renderImage()}
        {this.renderTexts()}
      </div>
    );
  }

  renderImage() {
    const { image } = this.props;
    return (
      <a href="/">
        <div className="image" style={{ borderRadius: 5, overflow: "hidden" }}>
          <img src={image} width="100%" height="220px" />
        </div>
      </a>
    );
  }

  renderTexts() {
    return (
      <div className="texts">
        {this.renderTextsTitle()}
        {this.renderTextsSecondLine()}
        {this.renderTextsThirdLine()}
      </div>
    );
  }

  renderTextsTitle() {
    return (
      <Typography variant="h6" component="h3">
        {this.props.title}
      </Typography>
    );
  }

  renderTextsSecondLine() {
    const { menuType, courseType, cuisineType } = this.props;
    return (
      <div style={{ marginTop: -3 }}>
        <Typography variant="body2" component="span" color="primary">
          <Link href="#">{menuType.title}. </Link>
        </Typography>
        <Typography variant="body2" component="span" style={{ color: "#999" }}>
          {cuisineType.title}. {courseType.title}
        </Typography>
      </div>
    );
  }

  renderTextsThirdLine() {
    return (
      <div style={{ marginTop: 2, display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          {this.renderTextsThirdLinePreparation()}
          {this.renderTextsThirdLinePrice()}
        </div>
        <div>{this.renderTextsThirdLineFreePickup()}</div>
      </div>
    );
  }

  renderTextsThirdLinePreparation() {
    const { preparation } = this.props;

    return (
      <Typography
        variant="caption"
        style={{
          backgroundColor: "#eee",
          padding: 5,
          marginRight: 5
        }}
      >
        <AvTimerIcon
          style={{
            verticalAlign: "middle",
            fontSize: "16px"
          }}
        />
        {preparation}-{preparation + 2} Mins
      </Typography>
    );
  }

  renderTextsThirdLinePrice() {
    const { price } = this.props;
    return (
      <Typography
        variant="caption"
        style={{ backgroundColor: "#bbb", padding: 5 }}
      >
        <span>${price}</span>
      </Typography>
    );
  }

  renderTextsThirdLineFreePickup() {
    return (
      <Typography
        color="primary"
        variant="caption"
        style={{
          backgroundColor: "#eee",
          cursor: "pointer"
        }}
      >
        Free Pickup
      </Typography>
    );
  }
}
