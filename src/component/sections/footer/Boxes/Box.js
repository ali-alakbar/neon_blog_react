import React from "react";

const Box = (props) => {
  return (
    <ul className={props.className ? `box ${props.className}` : "box"}>
      <li style={{ fontSize: props.className ? "17px" : "" }}>
        {props.listOne}
      </li>
      <li style={{ fontSize: props.className ? "17px" : "" }}>
        {props.listTwo}
      </li>
      <li style={{ fontSize: props.className ? "17px" : "" }}>
        {props.listThree}
      </li>
    </ul>
  );
};

export default Box;
