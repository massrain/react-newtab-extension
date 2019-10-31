/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import SingleBookmark from "../components/SingleBookmark";

const History = () => {
  const [HistoryList, setHistoryList] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
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
    };
    getHistory();
  }, []);

  return (
    <React.Fragment>
      <div className="row no-gutters justify-content-center overflowy--scroll">
        <div className="col-8">
          {HistoryList.length > 0 ? HistoryList.map(item => <SingleBookmark item={item} key={item.id} />) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
