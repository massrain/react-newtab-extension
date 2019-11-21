import React from "react";
import Modal from "react-modal";

const ImagePickerModal = props => {
  return (
    <>
      <Modal
        isOpen={props.showImagePickerModal}
        onRequestClose={() => props.setShowImagePickerModal(false)}
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
            top: "10vh",
            left: "5vw",
            right: "80vw",
            bottom: "10vh"
          }
        }}
      >
        <div className="container-fluid p-0 h-100">
          <div className="row no-gutters justify-content-center h-100">
            <div className="col-12 d-flex flex-column justify-content-between my-2 h-100">
              <div className="row no-gutters justify-content-center">
                <h5 className={`text-${props.colorTextData.mains}`}>Arkaplan Seçimi</h5>
              </div>
              <div className="row no-gutters justify-content-center flex-grow-1 imagepicker--overflowy scrollbarStyle2">
                {/* <img src="/assets/wallpapers/bing1.jpg" alt="" className="img-fluid" /> */}
                <div className="col-12">
                  {Array.apply(0, Array(13)).map(function(x, i) {
                    return <ImageDisplayer key={i} number={i} selectImageBackground={props.selectImageBackground} />;
                  })}
                </div>
              </div>
              <div className="row no-gutters justify-content-center mt-3">
                <button
                  className={`btn btn-outline-${props.colorTextData.navButtons}`}
                  onClick={() => props.setShowImagePickerModal(false)}
                >
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

export default ImagePickerModal;

const ImageDisplayer = props => (
  <div className="row no-gutters my-2 p-2">
    <img
      src={`/assets/wallpapers/bing${props.number}.jpg`}
      alt=""
      className="img-fluid cursor--pointer"
      onClick={() => props.selectImageBackground(props.number)}
    />
  </div>
);
