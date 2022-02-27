import React from "react";
const Video = (props) => {
  return (
    <div className={"videoContainer"}>
      <video
        autoPlay
        muted
        loop="True"
        id="myVideo"
        src={props.newVideoProps}
      ></video>
    </div>
  );
};

export default Video;
