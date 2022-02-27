import React, { Component } from "react";
import Description from "./Boxes/Description";
import Video from "./Boxes/Video";
class LandingPage extends Component {
  render() {
    return (
      <section
        className="video-section landingPage-section"
        style={{
          margin: this.props.pageName === "signUp" ? "0" : "",
        }}
      >
        <div
          style={{
            width: this.props.pageName === "signUp" ? "100%" : "",
            padding: this.props.pageName === "signUp" ? "0" : "",
          }}
          className="container"
        >
          <Description
            pageName={this.props.pageName}
            newTitleProps={this.props.title}
            newDesProps={this.props.description}
            btnDisabled={this.props.btnDisabled}
            btnTitle={this.props.btnTitle}
            btnTitle2={this.props.btnTitle2}
          />
          <Video
            pageName={this.props.pageName}
            newVideoProps={require(`${this.props.myVideo}`)}
          />
        </div>
      </section>
    );
  }
}

export default LandingPage;
