import React, { useState, useRef } from "react";

const SearchBar = () => {
  const [searchWebsite, setSearchWebsite] = useState("google");
  const ibSearchText = useRef(null);
  const ibSearchImage = useRef(null);
  const ibSearchVideo = useRef(null);
  const ibSearchMap = useRef(null);
  const ibSearchWebsite = useRef(null);

  const defaultSearch = () => {
    let linkGoogle = `http://www.google.com/search?q=${ibSearchText.current.value}`;
    let linkYandex = `https://yandex.com.tr/search/?text=${ibSearchText.current.value}`;
    let linkBing = `https://www.bing.com/search?q=${ibSearchText.current.value}`;
    if (searchWebsite === "google") window.open(linkGoogle, "_blank");
    else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
    else if (searchWebsite === "bing") window.open(linkBing, "_blank");
  };
  //https://webapps.stackexchange.com/questions/47587/google-image-search-url-that-can-be-shared
  const imageSearch = () => {
    let linkGoogle = `https://google.com/search?tbm=isch&q=${ibSearchImage.current.value}`;
    let linkYandex = `https://yandex.com.tr/gorsel/search?&text=${ibSearchImage.current.value}`;
    let linkBing = `https://www.bing.com/images/search?q=${ibSearchImage.current.value}`;
    if (searchWebsite === "google") window.open(linkGoogle, "_blank");
    else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
    else if (searchWebsite === "bing") window.open(linkBing, "_blank");
  };
  const videoSearch = () => {
    let linkGoogle = `https://google.com/search?tbm=vid&q=${ibSearchVideo.current.value}`;
    let linkYandex = `https://yandex.com.tr/video/search?&text=${ibSearchVideo.current.value}`;
    let linkBing = `https://www.bing.com/videos/search?q=${ibSearchVideo.current.value}`;
    if (searchWebsite === "google") window.open(linkGoogle, "_blank");
    else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
    else if (searchWebsite === "bing") window.open(linkBing, "_blank");
  };
  const mapSearch = () => {
    let linkGoogle = `https://www.google.com/maps?q=${ibSearchMap.current.value}`;
    let linkYandex = `https://yandex.com.tr/harita/?text=${ibSearchMap.current.value}`;
    let linkBing = `https://www.bing.com/maps?q=${ibSearchMap.current.value}`;
    if (searchWebsite === "google") window.open(linkGoogle, "_blank");
    else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
    else if (searchWebsite === "bing") window.open(linkBing, "_blank");
  };
  const websiteSearch = () => {
    let linkGoogle = `https://www.google.com/search?q=site%3Arerererarara.net+${ibSearchWebsite.current.value}`;
    let linkYandex = `https://yandex.com.tr/search/?text=url%3Drerererarara.net+${ibSearchWebsite.current.value}`;
    let linkBing = `https://www.bing.com/search?q=url%3D%22rerererarara.net%22+${ibSearchWebsite.current.value}`;
    if (searchWebsite === "google") window.open(linkGoogle, "_blank");
    else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
    else if (searchWebsite === "bing") window.open(linkBing, "_blank");
  };
  const onSearchWebsiteChange = e => {
    setSearchWebsite(e.target.value);
  };
  return (
    <>
      <nav>
        <div className="nav nav-tabs">
          <a className="nav-item nav-link text-searchbar active" data-toggle="tab" href="#nav-all">
            Tümü
          </a>
          <a className="nav-item nav-link text-searchbar" data-toggle="tab" href="#nav-photo">
            Görseller
          </a>
          <a className="nav-item nav-link text-searchbar" data-toggle="tab" href="#nav-video">
            Videolar
          </a>
          <a className="nav-item nav-link text-searchbar" data-toggle="tab" href="#nav-map">
            Harita
          </a>
          <a className="nav-item nav-link text-searchbar" data-toggle="tab" href="#nav-website">
            Websitede
          </a>
        </div>
      </nav>
      <div className="tab-content">
        {/* ALL */}
        <div className="tab-pane fade show active" id="nav-all">
          <div className="form-group mt-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <select
                  className="form-control rounded-0 bg-transparent text-white"
                  onChange={onSearchWebsiteChange}
                  value={searchWebsite}
                >
                  <option value="google" className="text-primary">
                    Google
                  </option>
                  <option value="yandex" className="text-primary">
                    Yandex
                  </option>
                  <option value="bing" className="text-primary">
                    Bing
                  </option>
                </select>
              </div>
              <input
                type="text"
                ref={ibSearchText}
                className="form-control rounded-0 bg-transparent text-white"
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
        {/* PHOTO */}
        <div className="tab-pane fade" id="nav-photo">
          <div className="form-group mt-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <select
                  className="form-control rounded-0 bg-transparent text-white"
                  onChange={onSearchWebsiteChange}
                  value={searchWebsite}
                >
                  <option value="google" className="text-primary">
                    Google
                  </option>
                  <option value="yandex" className="text-primary">
                    Yandex
                  </option>
                  <option value="bing" className="text-primary">
                    Bing
                  </option>
                </select>
              </div>
              <input
                type="text"
                ref={ibSearchImage}
                className="form-control rounded-0 bg-transparent text-white"
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
        {/* VIDEO */}
        <div className="tab-pane fade" id="nav-video">
          <div className="form-group mt-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <select
                  className="form-control rounded-0 bg-transparent text-white"
                  onChange={onSearchWebsiteChange}
                  value={searchWebsite}
                >
                  <option value="google" className="text-primary">
                    Google
                  </option>
                  <option value="yandex" className="text-primary">
                    Yandex
                  </option>
                  <option value="bing" className="text-primary">
                    Bing
                  </option>
                </select>
              </div>
              <input
                type="text"
                ref={ibSearchVideo}
                className="form-control rounded-0 bg-transparent text-white"
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
        {/* MAP */}
        <div className="tab-pane fade" id="nav-map">
          <div className="form-group mt-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <select
                  className="form-control rounded-0 bg-transparent text-white"
                  onChange={onSearchWebsiteChange}
                  value={searchWebsite}
                >
                  <option value="google" className="text-primary">
                    Google
                  </option>
                  <option value="yandex" className="text-primary">
                    Yandex
                  </option>
                  <option value="bing" className="text-primary">
                    Bing
                  </option>
                </select>
              </div>
              <input
                type="text"
                ref={ibSearchMap}
                className="form-control rounded-0 bg-transparent text-white"
                placeholder="Aramak istediğiniz.."
              />
              <div className="input-group-append">
                <button className="btn btn-danger rounded-0 px-5" onClick={mapSearch}>
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* WEBSITE */}
        <div className="tab-pane fade" id="nav-website">
          <div className="form-group mt-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <select
                  className="form-control rounded-0 bg-transparent text-white"
                  onChange={onSearchWebsiteChange}
                  value={searchWebsite}
                >
                  <option value="google" className="text-primary">
                    Google
                  </option>
                  <option value="yandex" className="text-primary">
                    Yandex
                  </option>
                  <option value="bing" className="text-primary">
                    Bing
                  </option>
                </select>
              </div>
              <input
                type="text"
                ref={ibSearchWebsite}
                className="form-control rounded-0 bg-transparent text-white"
                placeholder="Aramak istediğiniz.."
              />
              <div className="input-group-append">
                <button className="btn btn-danger rounded-0 px-5" onClick={websiteSearch}>
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
