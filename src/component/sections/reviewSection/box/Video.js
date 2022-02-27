import React from "react";
const Video = (props) => {
  return (
    <div
      className={
        props.pageName === "home" ? `videoContainer ${'myActive'}` : "videoContainer"
      }
    >
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
