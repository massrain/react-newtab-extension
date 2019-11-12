/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import SingleBookmark from "../components/SingleBookmark";

const History = props => {
  const [HistoryList, setHistoryList] = useState([]);
  const [HistoryDisplayer, setHistoryDisplayer] = useState(false);

  useEffect(() => {
    let arrayOfHistory = [];
    chrome.history.search({ text: "", maxResults: 20 }, function(data) {
      data.forEach(function(item) {
        processNode(item);
      });
    });
    function processNode(node) {
      console.log(node);
      // print leaf nodes URLs to console
      if (node.url) {
        arrayOfHistory.push({ id: node.id, url: node.url, title: node.title });
        //console.log(node.url);
      }
    }
    setHistoryList(arrayOfHistory);
  }, []);

  const btnSyncHistory = () => {
    if (HistoryList.length > 0 && HistoryDisplayer === "none") {
      setHistoryDisplayer("block");
    }
    props.history.push("/history");
  };

  return (
    <React.Fragment>
      <div className="row no-gutters justify-content-center overflowy--scroll scrollbarStyle mt-3">
        <div className="col-8 justify-content-center text-center">
          <button className="btn btn-outline-light" onClick={btnSyncHistory}>
            Tarayıcı geçmişini senkronize et
          </button>
          <br />
          <div className="mt-3" style={{ display: HistoryDisplayer }}>
            {HistoryList.map(item => (
              <SingleBookmark item={item} key={item.id} colorTextData={props.colorTextData} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
