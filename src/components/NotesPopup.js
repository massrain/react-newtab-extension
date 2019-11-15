import React, { useRef } from "react";

const NotesPopup = props => {
  const ibSearchBox = useRef(null);

  const btnAddNoteClick = () => {
    let pushContent = ibSearchBox.current.value;
    let originalArray = props.LayoutData;
    let resultArray = originalArray.concat(pushContent);
    props.setLayoutData(resultArray);
  };

  return (
    <>
      <div
        className="container-fluid p-4 WeatherPopup text-white text-center"
        style={{ display: props.NotesVisibility }}
      >
        <div className="row no-gutters justify-content-center overflowy--scroll scrollbarStyle mt-3">
          <div className="col-12 justify-content-center text-center">
            <div className="row no-gutters">
              <SingleNote colorTextData={props.colorTextData} />
            </div>
            <div className="row no-gutters">
              <input
                type="text"
                ref={ibSearchBox}
                className={`form-control rounded-0 bg-transparent text-${props.colorTextData.mains} border-0 searchBorder border-${props.colorTextData.mains}`}
                placeholder="Aramak istediğiniz.."
                onKeyDown={event => {
                  if (event.key === "Enter") btnAddNoteClick();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesPopup;

const SingleNote = props => (
  <div
    className={`card border-secondary bg-transparent itemCard text-${props.colorTextData.mains} mb-3 cursor--pointer`}
  >
    <div className="card-body px-4 py-1">
      <p className="card-text d-flex align-items-center justify-content-center">data text</p>
    </div>
  </div>
);
