import React, { Component } from "react";
import Description from "./box/Description";
import Video from "./box/Video";
class MyReview extends Component {
  render() {
    return (
      <section
        style={this.props.styleBackground}
        className="video-section myReview-section"
      >
        <div className="container">
          <Description
            newTitleProps={this.props.title}
            newDesProps={this.props.description}
            isThird={this.props.name}
          />
          <Video
            newVideoProps={require(`${this.props.myVideo}`)}
            pageName={this.props.pageName}
          />
        </div>
      </section>
    );
  }
}

export default MyReview;
