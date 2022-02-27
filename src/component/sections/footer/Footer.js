import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Box from "./Boxes/Box";

const Footer = (props) => {
  return (
    <section className="footer" style={props.styleBackground}>
      <div className="container">
        <Box listOne={"Developer"} listTwo={"Blog"} listThree={"About"} />
        <Box listOne={"Terms"} listTwo={"FAQ"} listThree={"Address"} />
        <div>
          Call us <h1 className="callUs-number">(800) 824-5000</h1>
        </div>

        <div>
          <h3>Follow us</h3>
          <Box
            className={"socialMedia"}
            listOne={<FontAwesomeIcon icon={faFacebook} />}
            listTwo={<FontAwesomeIcon icon={faGithub} />}
            listThree={<FontAwesomeIcon icon={faTwitter} />}
          />
        </div>
      </div>
      <h3 className="rightReserved">@ All Right Reserved</h3>
    </section>
  );
};

export default Footer;
