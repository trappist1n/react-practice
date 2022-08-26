import React from "react";

export const ColorfulMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor
  };
  return (
    <>
      {/* <h1 style={contentStyle}>{props.message}</h1> */}
      <h1 style={contentStyle}>
        {props.message}
        {props.children}
      </h1>
    </>
  );
};
