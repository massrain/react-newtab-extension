/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

//import Test from "./exampleBookmarks.json";
import SingleBookmark from "../components/SingleBookmark.js";

const Bookmarks = props => {
  const [BookmarkList, setBookmarkList] = useState([]);
  const [BookmarkDisplayer, setBookmarkDisplayer] = useState(false);
  useEffect(() => {
    const getBookmarks = () => {
      //let kappa = chrome.bookmarks.getTree();
      let arrayOfBookmarks = [];
      chrome.bookmarks.getTree(function(itemTree) {
        //console.log(itemTree);
        itemTree.forEach(function(item) {
          processNode(item);
        });
      });

      function processNode(node) {
        // recursively process child nodes
        if (node.children) {
          node.children.forEach(function(child) {
            processNode(child);
          });
        }
        // print leaf nodes URLs to console
        if (node.url) {
          arrayOfBookmarks.push({ id: node.id, url: node.url, title: node.title });
          //console.log(node.url);
        }
      }
      console.log("arrayOfBookmarks");
      console.log(arrayOfBookmarks);
      setBookmarkList(arrayOfBookmarks);
    };
    getBookmarks();
  }, []);

  const btnSyncBookmark = () => {
    if (BookmarkList.length > 0 && BookmarkDisplayer === "none") {
      setBookmarkDisplayer("block");
    }
    props.history.push("/bookmarks");
  };
  return (
    <>
      <div className="row no-gutters justify-content-center overflowy--scroll scrollbarStyle">
        <div className="col-8 justify-content-center text-center">
          <button className="btn btn-light" onClick={btnSyncBookmark}>
            Yer imlerimi senkronize et
          </button>
          <br />
          <div style={{ display: BookmarkDisplayer }}>
            {BookmarkList.map(item => (
              <SingleBookmark item={item} key={item.id} colorTextData={props.colorTextData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
