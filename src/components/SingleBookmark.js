import React from "react";

const SingleBookmark = props => {
  const navToUrl = () => {
    window.open(props.item.url, "_blank");
  };
  return (
    <div
      className={`card border-secondary bg-transparent itemCard text-${props.colorTextData.mains} mb-3 cursor--pointer`}
      onClick={navToUrl}
    >
      <div className="card-body px-4 py-1">
        <p className="card-text">
          {props.item.title} ->
          <a href={props.item.url} rel="noopener noreferrer">
            Link
          </a>
        </p>
      </div>
    </div>
  );
};

export default SingleBookmark;

/* 

style="background-image: url("chrome://favicon/size/16@2x/https://buckysroom.org/"); background-position: center center; background-size: auto;"

*/
