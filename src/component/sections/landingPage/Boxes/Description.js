import React from "react";
import Btn from "../../button/Btn";

const Description = (props) => {
  return (
    <div
      className="description"
      style={{ display: props.pageName === "signUp" ? "none" : "" }}
    >
      <h1 className="landingTitle">{props.newTitleProps}</h1>
      <p className="landingDesc">{props.newDesProps}</p>
      <div className="btnContainer">
        <Btn
          classname={`btn-one ${props.btnDisabled}`}
          title={props.btnTitle}
        />
        <Btn classname={`btn-two`} title={props.btnTitle2} />
      </div>
    </div>
  );
};

export default Description;
