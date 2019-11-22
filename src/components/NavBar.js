import React, { useState, useEffect } from "react";
import { HelpModal } from "./modals/HelpModal";
import { BookmarksModal } from "./modals/BookmarksModal";
import { HistoryModal } from "./modals/HistoryModal";
import ImagePickerModal from "./modals/ImagePickerModal";
import NotesModal from "./modals/NotesModal";

const NavBar = props => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showImagePickerModal, setShowImagePickerModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [visibilityButton, setVisibilityButton] = useState(false);

  useEffect(() => {
    setVisibilityButton(props.ChooseBgVisibility);
  }, [props.ChooseBgVisibility]);
  const btnHelpClick = () => {
    showHelpModal ? handleCloseHelpModal() : handleOpenHelpModal();
  };
  const btnBookmarkClick = () => {
    showBookmarkModal ? handleCloseBookmarkModal() : handleOpenBookmarkModal();
  };
  const btnHistoryClick = () => {
    showHistoryModal ? handleCloseHistoryModal() : handleOpenHistoryModal();
  };
  const handleOpenHelpModal = () => {
    setShowHelpModal(true);
  };
  const handleCloseHelpModal = () => {
    setShowHelpModal(false);
  };
  const handleOpenBookmarkModal = () => {
    setShowBookmarkModal(true);
  };
  const handleCloseBookmarkModal = () => {
    setShowBookmarkModal(false);
  };
  const handleOpenHistoryModal = () => {
    setShowHistoryModal(true);
  };
  const handleCloseHistoryModal = () => {
    setShowHistoryModal(false);
  };
  const handleOpenImagePickerModal = () => {
    setShowImagePickerModal(true);
  };
  const handleOpenNotesModal = () => {
    setShowNotesModal(true);
  };
  const reviewExtension = () => {
    let link = "https://chrome.google.com/webstore";
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="container">
        <div className="row no-gutters mt-3">
          <div className={`${props.iconsVisibility === "true" ? "col-6 " : "col-12"} d-flex flex-column navButtons`}>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={btnHelpClick}
              style={{ display: props.navIconVisibilities.Yardim ? "block" : "none" }}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/help.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Yardım"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={reviewExtension}
              style={{ display: props.navIconVisibilities.Yorumla ? "block" : "none" }}
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
              style={{ display: props.navIconVisibilities.Havadurumu ? "block" : "none" }}
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
              style={{ display: props.navIconVisibilities.Arkaplan ? "block" : "none" }}
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
          <div className={`${props.iconsVisibility === "true" ? "col-6 " : "col-12"} d-flex flex-column navButtons`}>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={props.changeBookmarksVisibility}
              style={{ display: props.navIconVisibilities.Anasayfa ? "block" : "none" }}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/home.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Ana Ekran"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={btnBookmarkClick}
              style={{ display: props.navIconVisibilities.Yerimleri ? "block" : "none" }}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/bookmark.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Yer imleri"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={btnHistoryClick}
              style={{ display: props.navIconVisibilities.Gecmis ? "block" : "none" }}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/time.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Geçmiş"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={handleOpenNotesModal}
              style={{ display: props.navIconVisibilities.Notlar ? "block" : "none" }}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/note.png"} className="img-fluid" alt="" width={24} />
              ) : (
                "Notlar"
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={handleOpenImagePickerModal}
              style={{ display: props.navIconVisibilities.Arkaplan ? "block" : "none" }}
              disabled={visibilityButton === "block" ? true : false}
              id="btnChooseBgBackground"
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

      <HelpModal showHelpModal={showHelpModal} handleCloseModal={handleCloseHelpModal} />
      <ImagePickerModal
        showImagePickerModal={showImagePickerModal}
        colorTextData={props.colorTextData}
        selectImageBackground={props.selectImageBackground}
        setShowImagePickerModal={setShowImagePickerModal}
      />
      <NotesModal
        showNotesModal={showNotesModal}
        setShowNotesModal={setShowNotesModal}
        colorTextData={props.colorTextData}
        Notes={props.Notes}
        setNotes={props.setNotes}
      />
{/*       <BookmarksModal
        showBookmarkModal={showBookmarkModal}
        handleCloseModal={handleCloseBookmarkModal}
        colorTextData={props.colorTextData}
      />
      <HistoryModal
        showHistoryModal={showHistoryModal}
        handleCloseModal={handleCloseHistoryModal}
        colorTextData={props.colorTextData}
      /> */}
    </>
  );
};

export default NavBar;
