import React, { useRef } from "react";

const NotesPopup = props => {
  const ibNewNoteBox = useRef(null);

  const btnAddNoteClick = () => {
    let originalArray = props.Notes;
    let pushContent = ibNewNoteBox.current.value;
    let resultArray = originalArray.concat(pushContent);
    props.setNotes(resultArray);
  };

  const btnRemoveNoteClick = id => {
    function isBigEnough(value) {
      return value !== props.Notes[id];
    }
    console.log(props.Notes);
    let originalArray = props.Notes;
    const resultArray = originalArray.filter(isBigEnough);
    console.log(resultArray);
    props.setNotes(resultArray);
  };
  return (
    <>
      <div
        className="container-fluid px-3 py-2 NotesPopup text-white text-center mw--50 notesOverflow scrollbarStyle2"
        style={{ display: props.NotesVisibility }}
      >
        <div className="row no-gutters px-4 justify-content-center ">
          <div className="col-12 p-1 justify-content-center text-center">
            <div className="row no-gutters">
              <input
                type="text"
                ref={ibNewNoteBox}
                className={`form-control rounded-0 bg-transparent text-${props.colorTextData.mains} border-0 searchBorder border-${props.colorTextData.mains}`}
                placeholder="Yeni bir not girin.."
                onKeyDown={event => {
                  if (event.key === "Enter") {
                    btnAddNoteClick();
                    ibNewNoteBox.current.value = "";
                  }
                }}
              />
            </div>

            <div className="row no-gutters mt-3">
              <div className="col-12">
                {props.Notes.map((item, index) => (
                  <SingleNote
                    {...props}
                    key={index}
                    number={index}
                    contentData={item}
                    btnRemoveNoteClick={btnRemoveNoteClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesPopup;

const SingleNote = props => (
  <>
    <div className="row no-gutters justify-content-center text-center mt-1">
      <div className="col-11">
        <div
          className={`card border-secondary bg-transparent itemCard text-${props.colorTextData.mains} cursor--pointer`}
        >
          <div className="card-body px-4 py-1">
            <p className="card-text d-flex align-items-center justify-content-center text-break">{props.contentData}</p>
          </div>
        </div>
      </div>
      <div className="col-1">
        <button className="btn btn-link text-danger p-1 ml-auto" onClick={() => props.btnRemoveNoteClick(props.number)}>
          X
        </button>
      </div>
    </div>
  </>
);
