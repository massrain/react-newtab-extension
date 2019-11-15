/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import SingleBookmark from "../SingleBookmark";

export const HistoryModal = (props) => {
  const [HistoryList, setHistoryList] = useState([]);

  useEffect(() => {
    let arrayOfHistory = [];
    chrome.history.search({ text: "", maxResults: 20 }, function(data) {
      data.forEach(function(item) {
        processNode(item);
      });
    });
    function processNode(node) {
      if (node.url) {
        arrayOfHistory.push({ id: node.id, url: node.url, title: node.title });
      }
    }
    setHistoryList(arrayOfHistory);
  }, []);

  return (
    <Modal
      isOpen={props.showHistoryModal}
      onRequestClose={props.handleCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Help"
      style={{
        overlay: {
          backgroundColor: "rgba(30,30,30,0.75)",
          zIndex: "99999"
        },
        content: {
          color: "lightsteelblue",
          backgroundColor: "rgba(30,30,30,0.75)",
          top: "20vh",
          left: "20vw",
          right: "20vw",
          bottom: "20vh"
        }
      }}
    >
      <div className="container h-100">
        <div className="row no-gutters justify-content-center h-100">
          <div className="col-12 h-100 justify-content-center">
            <div className="row h-100 no-gutters justify-content-center overflowy--scroll scrollbarStyle my-1">
              <div className="col-11 justify-content-center text-center">
                <h5>Geçmiş</h5>
                <br />
                {HistoryList.map(item => (
                  <SingleBookmark item={item} key={item.id} colorTextData={props.colorTextData} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
