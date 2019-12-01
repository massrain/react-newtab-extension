import React, { useRef } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";

const NotesModal = props => {
  const ibNewNoteBox = useRef(null);
  const { t } = useTranslation();

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
    let originalArray = props.Notes;
    const resultArray = originalArray.filter(isBigEnough);
    props.setNotes(resultArray);
  };

  return (
    <>
      <Modal
        isOpen={props.showNotesModal}
        onRequestClose={() => props.setShowNotesModal(false)}
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
            left: "5vw",
            right: "70vw",
            bottom: "20vh"
          }
        }}
      >
        <div className="container-fluid p-0 h-100">
          <div className="row no-gutters justify-content-center h-100">
            <div className="col-12 d-flex flex-column justify-content-between my-2 h-100">
              <div className="row no-gutters justify-content-center">
                <h5 className={`text-${props.colorTextData.mains}`}>{t("notes.title")}</h5>
              </div>
              <div className="row no-gutters justify-content-center flex-grow-1 imagepicker--overflowy scrollbarStyle2">
                <div className="col-12 p-1 justify-content-center text-center">
                  <div className="row no-gutters">
                    <input
                      type="text"
                      ref={ibNewNoteBox}
                      className={`form-control rounded-0 bg-transparent text-${props.colorTextData.mains} border-0 searchBorder border-${props.colorTextData.mains}`}
                      placeholder={t("notes.create_new")}
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
              <div className="row no-gutters justify-content-center mt-3">
                <button
                  className={`btn btn-outline-${props.colorTextData.navButtons}`}
                  onClick={() => props.setShowNotesModal(false)}
                >
                  {t("notes.close_button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NotesModal;

const SingleNote = props => (
  <>
    <div className="row no-gutters justify-content-center text-center mt-1">
      <div className="col-11">
        <div
          className={`card border-secondary bg-transparent itemCard text-${props.colorTextData.mains} cursor--pointer`}
        >
          <div className="card-body px-2 py-1">
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
