/* eslint-disable no-undef */
import React from "react";

import SearchBar from "./components/SearchBar";
import FrequentlyUsed from "./components/FrequentlyUsed";

const Mainpage = props => {
  /*   const goDefaultTab = () => {
    chrome.tabs.getCurrent(tab => {
      chrome.tabs.update(tab.id, {
        url: "chrome-search://local-ntp/local-ntp.html"
      });
    });
  }; */

  return (
    <>
      <div className="row no-gutters justify-content-center">
        <div className="col-8 p-3">
          <SearchBar colorTextData={props.colorTextData} />
        </div>
      </div>

      {/*       <div className="row no-gutters justify-content-center mt-3">
        <div className="col-4">
          <button className="btn btn-block btn-outline-secondary btn-sm rounded-0" onClick={goDefaultTab}>
            Default Chrome yeni tab penceresine git
          </button>
        </div>
      </div> */}

      <div className="row no-gutters justify-content-center BookmarksRow">
        <div className="col-10">
          <FrequentlyUsed
            LayoutData={props.LayoutData}
            setLayoutData={props.setLayoutData}
            colorTextData={props.colorTextData}
            LayoutDetails={props.LayoutDetails}
            changeLayoutDetails={props.changeLayoutDetails}
            handleCollect={props.handleCollect}
          />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
