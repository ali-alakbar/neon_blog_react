import React from "react";
const Description = (props) => {
  return (
    <div className="description">
      <h1 className="landingTitle">{props.newTitleProps}</h1>
      <p className="landingDesc">{props.newDesProps}</p>
    </div>
  );
};

export default Description;
