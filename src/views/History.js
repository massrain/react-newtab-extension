/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import SingleBookmark from "../components/SingleBookmark";

const History = props => {
  const [HistoryList, setHistoryList] = useState(null);

  useEffect(() => {
    let arrayOfHistory = [];
    chrome.history.search({ text: "", maxResults: 20 }, function(data) {
      data.forEach(function(item) {
        processNode(item);
      });
    });
    function processNode(node) {
      // print leaf nodes URLs to console
      if (node.url) {
        arrayOfHistory.push({ id: node.id, url: node.url, title: node.title });
        //console.log(node.url);
      }
    }
    setHistoryList(arrayOfHistory);
  }, []);
  if (HistoryList === null) {
    return (
      <div className="row no-gutters justify-content-center overflowy--scroll">
        <div className="col-8">spinner{console.log("SPINNEERR")}</div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="row no-gutters justify-content-center overflowy--scroll scrollbarStyle">
          <div className="col-8">
            {HistoryList.map(item => (
              <SingleBookmark item={item} key={item.id} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default History;
