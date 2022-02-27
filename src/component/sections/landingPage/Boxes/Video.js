import React from "react";
const Video = (props) => {
  return (
    <div
      className={
        props.pageName === "home"
          ? `videoContainer ${"myActive"}`
          : "videoContainer"
      }
      style={{
        width: props.pageName === "signUp" ? "100%" : "",
      }}
    >
      <video
        className="videoClass"
        autoPlay
        muted
        loop="True"
        id="JSONVideo"
        src={props.newVideoProps}
      ></video>
    </div>
  );
};

export default Video;
