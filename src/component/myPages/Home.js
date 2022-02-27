import React, { Component } from "react";
import LandingPage from "../sections/landingPage/LandingPage";
import WaveSection from "../sections/waveSection/WaveSection";
import MyReview from "../sections/reviewSection/MyReview";
import data from "../../json/data.json";
import Footer from "../sections/footer/Footer";
import "../sections/styles/style.css";

class Home extends Component {
  handleChangeBackground() {
    document.querySelector("body").style.background = "#0a0117";
  }

  render() {
    return (
      <div style={this.handleChangeBackground()} id="home" className="home">
        <LandingPage
          title={data["landing page"].homePage.title}
          description={data["landing page"].homePage.description}
          myVideo={data["landing page"].homePage.media}
          btnTitle={"Get A Demo"}
          btnTitle2={"Free Trial"}
        />
        <WaveSection myVideo={data.waveSection.homePage.media} />
        <MyReview
          title={data["MyReview"].homePage.title}
          description={data["MyReview"].homePage.description}
          myVideo={data["MyReview"].homePage.media}
        />
        <LandingPage
          name={"third"}
          title={data["landing page"].homePage.title2}
          description={data["landing page"].homePage.description2}
          myVideo={data["landing page"].homePage.media2}
          btnTitle={"Sign In"}
          btnTitle2={"Rejester"}
        />
        {/* <MyReview
          name={"third"}
          title={data["MyReview"].homePage.title}
          description={data["MyReview"].homePage.description}
          myVideo={data["MyReview"].homePage.media2}
        /> */}
        <Footer styleBackground={{ background: "#0a0117" }} />
      </div>
    );
  }
}

export default Home;
