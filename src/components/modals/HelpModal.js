import React from "react";
import Modal from "react-modal";

export const HelpModal = (props) => {
  return (
    <Modal
      isOpen={props.showHelpModal}
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
      <div className="container">
        <div className="row no-gutters justify-content-center">
          <div className="col-10 justify-content-center">
            <div className="row no-gutters justify-content-center mt-2">
              <h5>Yardım </h5>
            </div>
            <div className="row no-gutters justify-content-center mt-3">
              <div className="col-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed animi molestias quibusdam hic
                  placeat iure cupiditate, quas labore dolorum ipsum autem itaque eos architecto modi ea! In, aliquam
                  voluptatum.
                  <hr />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed animi molestias quibusdam hic
                  placeat iure cupiditate, quas labore dolorum ipsum autem itaque eos architecto modi ea! In, aliquam
                  voluptatum.
                </p>
              </div>
            </div>
            <div className="row no-gutters justify-content-center mt-2">
              <button className="btn btn-primary" onClick={props.handleCloseModal}>
                Kapat
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
