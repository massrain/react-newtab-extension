import React, { useState, useEffect } from "react";
import { HelpModal } from "./modals/HelpModal";
import { BookmarksModal } from "./modals/BookmarksModal";
import { HistoryModal } from "./modals/HistoryModal";
import ImagePickerModal from "./modals/ImagePickerModal";
import NotesModal from "./modals/NotesModal";
import { useTranslation } from "react-i18next";
import GamesModal from "./modals/GamesModal";

const NavBar = props => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showGamesModal, setShowGamesModal] = useState(false);
  const [showImagePickerModal, setShowImagePickerModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [visibilityButton, setVisibilityButton] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setVisibilityButton(props.ChooseBgVisibility);
  }, [props.ChooseBgVisibility]);
  const btnHelpClick = () => {
    showHelpModal ? handleCloseHelpModal() : handleOpenHelpModal();
  };
  const btnGamesClick = () => {
    showGamesModal ? handleCloseGamesModal() : handleOpenGamesModal();
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
  const handleOpenGamesModal = () => {
    setShowGamesModal(true);
  };
  const handleCloseGamesModal = () => {
    setShowGamesModal(false);
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
                t("navbar.help")
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
                t("navbar.review")
              )}
            </button>
            <button
              className={`my-1 btn btn-sm btn-outline-${props.colorTextData.navButtons} p-1`}
              onClick={btnGamesClick}
              style={{ display: props.navIconVisibilities.Oyunlar ? "block" : "none" }}
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/games.png"} className="img-fluid" alt="" width={24} />
              ) : (
                t("navbar.games")
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
                t("navbar.weather")
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
                t("navbar.bg_refresh")
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
                t("navbar.mainscreen")
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
                t("navbar.bookmarks")
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
                t("navbar.history")
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
                t("navbar.notes")
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
                t("navbar.bg_choose")
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
                t("navbar.settings")
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
        imgBackgroundChoice={props.imgBackgroundChoice}
        BgPhotoCount={props.BgPhotoCount}
      />
      <NotesModal
        showNotesModal={showNotesModal}
        setShowNotesModal={setShowNotesModal}
        colorTextData={props.colorTextData}
        Notes={props.Notes}
        setNotes={props.setNotes}
      />
      <GamesModal showGamesModal={showGamesModal} handleCloseModal={handleCloseGamesModal} />
      <BookmarksModal
        showBookmarkModal={showBookmarkModal}
        handleCloseModal={handleCloseBookmarkModal}
        colorTextData={props.colorTextData}
      />
      <HistoryModal
        showHistoryModal={showHistoryModal}
        handleCloseModal={handleCloseHistoryModal}
        colorTextData={props.colorTextData}
      />
    </>
  );
};

export default NavBar;
