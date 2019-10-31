/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

//import Test from "./exampleBookmarks.json";
import SingleBookmark from "../components/SingleBookmark.js";

const Bookmarks = props => {
  const [BookmarkList, setBookmarkList] = useState([]);
  useEffect(() => {
    const getBookmarks = async () => {
      //let kappa = chrome.bookmarks.getTree();
      console.log("hello getBookmarks");
      let arrayOfBookmarks = [];
      chrome.bookmarks.getTree(function(itemTree) {
        console.log("itemTree");
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

  return (
    <>
      <div className="row no-gutters justify-content-center overflowy--scroll">
        <div className="col-8">
          {BookmarkList.length > 0 ? BookmarkList.map(item => <SingleBookmark item={item} key={item.id} />) : null}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
