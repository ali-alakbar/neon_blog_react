import React, { Component } from "react";
import LandingPage from "../sections/landingPage/LandingPage";
import data from "../../json/data.json";
import Footer from "../sections/footer/Footer";
import MyReview from "../sections/reviewSection/MyReview";
import "../sections/styles/style.css";

class About extends Component {
  handleChangeBackground() {
    document.querySelector("body").style.background = "#000";
  }
  render() {
    return (
      <div id="about" className="about" style={this.handleChangeBackground()}>
        <LandingPage
          pageName={"about"}
          title={data["landing page"].About.title}
          description={data["landing page"].About.description}
          myVideo={data["landing page"].About.media}
          btnDisabled={"disable"}
          btnTitle2={"Download CV"}
        />
        <MyReview
          title={data["MyReview"].About.title}
          description={data["MyReview"].About.description}
          myVideo={data["MyReview"].About.media}
          styleBackground={{ background: "#000" }}
        />
        <Footer styleBackground={{ background: "#000" }} />
      </div>
    );
  }
}

export default About;
