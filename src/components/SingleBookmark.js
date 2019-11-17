import React, { useRef } from "react";

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const SingleBookmark = props => {
  let selectedFreqObject = useRef(null);
  const navToUrl = () => {
    window.open(props.item.url);
  };

  function kekp(props) {
    selectedFreqObject = props["data-capture"];
  }

  const btnAddNewFrequentlyVisited = () => {
    console.log("new");
  };
  const btnRemoveFreqObject = () => {
    console.log("remove item = " + selectedFreqObject);
  };

  return (
    <>
      <div
        className={`card border-secondary bg-transparent itemCard text-${props.colorTextData.mains} mb-3 cursor--pointer`}
        onClick={navToUrl}
      >
        <div className="card-body px-4 py-1">
          <p className="card-text d-flex align-items-center justify-content-center">
            <ContextMenuTrigger id="freq_identifier">
              <img
                className="img-fluid mx-2"
                src={`chrome://favicon/size/16@2x/${props.item.url}}`}
                width={16}
                alt=""
              />
            </ContextMenuTrigger>
            {props.item.title}
            <a href={props.item.url} className="mx-2" rel="noopener noreferrer">
              Link
            </a>
          </p>
        </div>
      </div>

      <ContextMenu id="freq_identifier" style={{ marginLeft: "-100px" }}>
        <div className="container-fluid p-0 bg-white">
          <MenuItem data={{ foo: "bar" }} onClick={btnRemoveFreqObject} className="dropdown-item cursor--pointer">
            Kaldır
          </MenuItem>
          <div className="dropdown-divider"></div>
          <MenuItem divider />
          <MenuItem
            data={{ foo: "bar" }}
            className="dropdown-item cursor--pointer"
            onClick={btnAddNewFrequentlyVisited}
          >
            Yeni Ekle
          </MenuItem>
        </div>
      </ContextMenu>
    </>
  );
};

export default SingleBookmark;

/* 

style="background-image: url("chrome://favicon/size/16@2x/https://buckysroom.org/"); background-position: center center; background-size: auto;"

*/
