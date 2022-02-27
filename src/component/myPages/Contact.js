import React, { Component } from "react";
import LandingPage from "../sections/landingPage/LandingPage";
import data from "../../json/data.json";
import Form from "../sections/contactForm/Form";
import Footer from "../sections/footer/Footer";
import "../sections/styles/style.css";

class Contact extends Component {
  handleChangeBackground() {
    document.querySelector("body").style.background = "#01001c";
  }
  render() {
    return (
      <div
        id="contact"
        className="contact"
        style={this.handleChangeBackground()}
      >
        <LandingPage
          pageName={"contact"}
          title={data["landing page"].Contact.title}
          description={data["landing page"].Contact.description}
          myVideo={data["landing page"].Contact.media}
          btnDisabled={"disable"}
          btnTitle2={"Click Here"}
        />
        <Form />
        <Footer styleBackground={{ background: "#01001c" }} />
      </div>
    );
  }
}

export default Contact;
