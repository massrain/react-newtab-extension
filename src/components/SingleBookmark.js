import React from "react";

const SingleBookmark = props => {
  const navToUrl = () => {
    window.open(props.item.url);
  };

  return (
    <>
      <div
        className={`card border-secondary bg-transparent itemCard text-${props.colorTextData.mains} mb-3 cursor--pointer`}
        onClick={navToUrl}
      >
        <div className="card-body px-4 py-1">
          <p className="card-text d-flex align-items-center justify-content-center">
            <img className="img-fluid mx-2" src={`chrome://favicon/size/16@2x/${props.item.url}}`} width={16} alt="" />

            {props.item.title}
            <a href={props.item.url} className="mx-2" rel="noopener noreferrer">
              Link
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBookmark;

/* 

style="background-image: url("chrome://favicon/size/16@2x/https://buckysroom.org/"); background-position: center center; background-size: auto;"

*/
