import React from "react";
import { ContextMenuTrigger } from "react-contextmenu";

const SingleObject = props => {
  return (
    <>
      <div
        className={`container-fluid d-flex flex-column h-100 cursor--move Freq--SingleObject--boxStyle text-${props.colorTextData.mains}`}
      >
        <div className="col-12 d-flex flex-column justify-content-center frequentlyBox">
          <div className={`row no-gutters justify-content-center`}>
            <div className={`col-12 h-100 p-0 justify-content-center text-center`}>
              <img
                src={props.contentIcon}
                className={`img-fluid rounded-lg cursor--pointer`}
                onClick={() => props.redirectLink(props.contentLink)}
                alt=""
                style={{ height: "64px" }}
              />
            </div>
          </div>
          <div
            className="row no-gutters text-center cursor--contextmenu justify-content-center"
            onClick={props.MouseTrack}
          >
            <ContextMenuTrigger id={"some_unique_identifier"} collect={props.handleCollect}>
              <div className="col-12 h-100 p-0 text-center" data-index={props.dataindex} data-id={props.dataid}>
                <p className="mb-0 cursor--pointer" onClick={() => props.redirectLink(props.contentLink)}>
                  {props.contentName}
                </p>
              </div>
            </ContextMenuTrigger>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleObject;
//https://www.rubberduck.io/blog/browser-extensions-react/
//border border-${props.colorTextData.mains}
