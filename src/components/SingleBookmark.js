import React from "react";

const SingleBookmark = props => {
  return (
    <div className="card border-success mb-3">
      <div className="card-body px-4 py-1">
        <p className="card-text">
          {props.item.title} ->{" "}
          <a href={props.item.url} rel="noopener noreferrer">
            Link
          </a>
        </p>
      </div>
    </div>
  );
};

export default SingleBookmark;
