import React from "react";

const SingleObject = props => {
  return (
    <>
      <div
        className="container-fluid d-flex h-100 cursor--pointer Freq--SingleObject--boxStyle"
        onClick={() => props.redirectLink(props.contentLink)}
      >
        <div className="row no-gutters">
          <p className="lead mb-0">{props.contentName}</p>
        </div>
      </div>
    </>
  );
};

export default SingleObject;
//https://www.rubberduck.io/blog/browser-extensions-react/
