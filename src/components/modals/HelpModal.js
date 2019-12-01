import React from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";

export const HelpModal = props => {
  const { t } = useTranslation();
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
              <h5>{t("help.title")}</h5>
            </div>
            <div className="row no-gutters justify-content-center mt-3">
              <div className="col-10">
                <p>
                  {t("help.paragraph_1")}
                  <hr />
                  <br />
                  {t("help.paragraph_2")}
                </p>
              </div>
            </div>
            <div className="row no-gutters justify-content-center mt-2">
              <button className="btn btn-primary" onClick={props.handleCloseModal}>
                {t("help.close_button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
