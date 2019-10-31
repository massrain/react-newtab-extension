import React, { useRef } from "react";

const SearchBar = () => {
  const ibSearchText = useRef(null);
  const ibSearchImage = useRef(null);
  const ibSearchVideo = useRef(null);

  const defaultSearch = () => {
    let link = `http://www.google.com/search?q=${ibSearchText.current.value}`;
    window.open(link, "_blank");
  };
  //https://webapps.stackexchange.com/questions/47587/google-image-search-url-that-can-be-shared
  const imageSearch = () => {
    let link = `https://google.com/search?tbm=isch&q=${ibSearchImage.current.value}`;
    window.open(link, "_blank");
  };
  const videoSearch = () => {
    let link = `https://google.com/search?tbm=vid&q=${ibSearchVideo.current.value}`;
    window.open(link, "_blank");
  };

  return (
    <>
      <nav>
        <div className="nav nav-tabs">
          <a className="nav-item nav-link active" data-toggle="tab" href="#nav-home">
            Tümünde Ara
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#nav-profile">
            Görsellerde Ara
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#nav-contact">
            Videolarda Ara
          </a>
        </div>
      </nav>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="nav-home">
          <div className="form-group mt-3">
            <div className="input-group mb-3">
              <input
                type="text"
                ref={ibSearchText}
                className="form-control rounded-0"
                placeholder="Aramak istediğiniz.."
              />
              <div className="input-group-append">
                <button className="btn btn-info rounded-0 px-5" onClick={defaultSearch}>
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-profile">
          <div className="form-group mt-3">
            <div className="input-group mb-3">
              <input
                type="text"
                ref={ibSearchImage}
                className="form-control rounded-0"
                placeholder="Aramak istediğiniz.."
              />
              <div className="input-group-append">
                <button className="btn btn-warning rounded-0 px-5" onClick={imageSearch}>
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-contact">
          <div className="form-group mt-3">
            <div className="input-group mb-3">
              <input
                type="text"
                ref={ibSearchVideo}
                className="form-control rounded-0"
                placeholder="Aramak istediğiniz.."
              />
              <div className="input-group-append">
                <button className="btn btn-danger rounded-0 px-5" onClick={videoSearch}>
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
