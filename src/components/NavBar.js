import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Modal from "react-modal";

const NavBar = props => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const btnHelpClick = () => {
    showHelpModal ? handleCloseModal() : handleOpenModal();
  };
  const handleOpenModal = () => {
    setShowHelpModal(true);
  };
  const handleCloseModal = () => {
    setShowHelpModal(false);
  };
  return (
    <>
      <div className="container">
        <div className="row no-gutters mt-3">
          <div className="col-6 d-flex flex-column navButtons">
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={props.changeBookmarksVisibility}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/focus.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Ekranı Gizle"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={btnHelpClick}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/help.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Yardım"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={props.changeBookmarksVisibility}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/comment.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Uzantıyı Yorumla"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={props.changeWeatherVisibility}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/partly.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Hava Durumu"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={props.btnRefreshBackground}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/refresh.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Arkaplan"
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row no-gutters mb-3">
          <div className="col-6 d-flex flex-column navButtons">
            <Link
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              to="/"
              onClick={props.BookmarksVisibility === "none" ? props.changeBookmarksVisibility : null}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/home.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Anasayfa"
              )}
            </Link>
            <Link
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              to="/bookmarks"
              onClick={props.BookmarksVisibility === "none" ? props.changeBookmarksVisibility : null}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/bookmark.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Yer imleri"
              )}
            </Link>
            <Link className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`} to="/history">
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/time.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Geçmiş"
              )}
            </Link>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={props.changeNotesVisibility}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/note.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Notlar"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={props.btnChooseBackground}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/photo.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Arkaplan Seç"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={() => {
                props.setOptionsVisibility("block");
              }}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/settings.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Ayarlar"
              )}
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showHelpModal}
        onRequestClose={handleCloseModal}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed animi molestias quibusdam
                    hic placeat iure cupiditate, quas labore dolorum ipsum autem itaque eos architecto modi ea! In,
                    aliquam voluptatum.
                    <hr />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed animi molestias quibusdam
                    hic placeat iure cupiditate, quas labore dolorum ipsum autem itaque eos architecto modi ea! In,
                    aliquam voluptatum.
                  </p>
                </div>
              </div>
              <div className="row no-gutters justify-content-center mt-2">
                <button className="btn btn-primary" onClick={handleCloseModal}>
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default withRouter(NavBar);
