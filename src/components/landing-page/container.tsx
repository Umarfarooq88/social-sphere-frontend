import React from "react";

const Container = (props: any) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
      id={props.id ? props.id : ""}
    >
      {props.children}
    </div>
  );
};

export default Container;
