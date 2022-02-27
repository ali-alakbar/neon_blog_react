import React, { Component } from "react";
import LandingPage from "../sections/landingPage/LandingPage";
import data from "../../json/data.json";
import Form from "../sections/contactForm/Form";
import Footer from "../sections/footer/Footer";
import "../sections/styles/style.css";

class SignUp extends Component {
  handleChangeBackground() {
    document.querySelector("body").style.background = "#000";
  }
  render() {
    return (
      <div id="signUp" className="signUp" style={this.handleChangeBackground()}>
        <LandingPage
          pageName={"signUp"}
          title={data["landing page"].SignUp.title}
          description={data["landing page"].SignUp.description}
          myVideo={data["landing page"].SignUp.media}
          btnTitle2={"Click Here"}
          btnDisabled={"disable"}
        />
        <Form pageName={"signUp"} />
        <Footer styleBackground={{ background: "#000" }} />
      </div>
    );
  }
}

export default SignUp;
