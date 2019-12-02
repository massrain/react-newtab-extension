/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import SingleBookmark from "../SingleBookmark";
import { useTranslation } from "react-i18next";

export const BookmarksModal = props => {
  const [BookmarkList, setBookmarkList] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    let arrayOfBookmarks = [];
    chrome.bookmarks.getTree(function(itemTree) {
      itemTree.forEach(function(item) {
        processNode(item);
      });
    });
    function processNode(node) {
      if (node.children) {
        node.children.forEach(function(child) {
          processNode(child);
        });
      }
      if (node.url) {
        arrayOfBookmarks.push({ id: node.id, url: node.url, title: node.title });
      }
    }
    setBookmarkList(arrayOfBookmarks);
  }, []);
  return (
    <Modal
      isOpen={props.showBookmarkModal}
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
          top: "5vh",
          left: "5vw",
          right: "70vw",
          bottom: "5vh"
        }
      }}
    >
      <div className="container h-100">
        <div className="row no-gutters justify-content-center h-100">
          <div className="col-12 h-100 justify-content-center">
            <div className="row h-100 no-gutters justify-content-center static--overflowy--scroll scrollbarStyle my-1">
              <div className="col-11 justify-content-center text-center">
                <h5>{t("bookmarks_popup_title")}</h5>
                <br />
                {BookmarkList.map(item => (
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
