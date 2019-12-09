import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";

const GamesModal = props => {
  const [BuiltInGames, setBuiltInGames] = useState([]);
  const { t } = useTranslation();

  function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key) {
      result.push(json[key]);
    });
    return result;
  }

  useEffect(() => {
    fetch("/methods/games.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBuiltInGames(json2array(data));
      });
  }, []);

  const handleAllGamesClick = () => {
    fetch("/methods/gameslink.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        window.open(data.all_games, "_blank");
      });
  };

  return (
    <Modal
      isOpen={props.showGamesModal}
      onRequestClose={props.handleCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Games"
      style={{
        overlay: {
          backgroundColor: "rgba(30,30,30,0.75)",
          zIndex: "99999"
        },
        content: {
          color: "lightsteelblue",
          backgroundColor: "rgba(30,30,30,0.75)",
          top: "10vh",
          left: "5vw",
          right: "60vw",
          bottom: "10vh"
        }
      }}
    >
      <div className="container scrollbarStyle">
        <div className="row no-gutters justify-content-center static--overflowy--scroll scrollbarStyle">
          <div className="col-12 justify-content-center scrollbarStyle">
            <div className="row no-gutters justify-content-center mt-2">
              <h5>{t("games.title")}</h5>
            </div>
            <div className="row no-gutters justify-content-center mt-3">
              {BuiltInGames.map((element, i) => (
                <div className="col-4 p-3 text-center" key={i}>
                  <div className="border border-secondary p-2">
                    <img
                      src={element.image}
                      alt=""
                      className="img-fluid cursor--pointer"
                      onClick={() => window.open(element.link, "_blank")}
                    />
                    <a href={element.link} target="_blank" rel="noopener noreferrer">
                      {element.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="row no-gutters justify-content-center mt-2">
              <button className="btn btn-success font-weight-bold btn-lg" onClick={handleAllGamesClick}>
                {t("games.all_games")}
              </button>
            </div>
            <div className="row no-gutters justify-content-center mt-2">
              <button className="btn btn-primary" onClick={props.handleCloseModal}>
                {t("games.close_button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GamesModal;
