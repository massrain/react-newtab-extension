import React, { useState, useRef } from "react";

const SearchBar = props => {
  const [searchWebsite, setSearchWebsite] = useState("google");
  const [searchType, setSearchType] = useState("default");
  const ibSearchBox = useRef(null);

  const onSearchWebsiteChange = e => {
    setSearchWebsite(e.target.value);
  };
  const onSearchTypeChange = e => {
    setSearchType(e.target.value);
  };
  const btnSearchClick = () => {
    if (searchType === "default") {
      let linkGoogle = `http://www.google.com/search?q=${ibSearchBox.current.value}`;
      let linkYandex = `https://yandex.com.tr/search/?text=${ibSearchBox.current.value}`;
      let linkBing = `https://www.bing.com/search?q=${ibSearchBox.current.value}`;
      if (searchWebsite === "google") window.open(linkGoogle, "_blank");
      else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
      else if (searchWebsite === "bing") window.open(linkBing, "_blank");
    } else if (searchType === "image") {
      let linkGoogle = `https://google.com/search?tbm=isch&q=${ibSearchBox.current.value}`;
      let linkYandex = `https://yandex.com.tr/gorsel/search?&text=${ibSearchBox.current.value}`;
      let linkBing = `https://www.bing.com/images/search?q=${ibSearchBox.current.value}`;
      if (searchWebsite === "google") window.open(linkGoogle, "_blank");
      else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
      else if (searchWebsite === "bing") window.open(linkBing, "_blank");
    } else if (searchType === "video") {
      let linkGoogle = `https://google.com/search?tbm=vid&q=${ibSearchBox.current.value}`;
      let linkYandex = `https://yandex.com.tr/video/search?&text=${ibSearchBox.current.value}`;
      let linkBing = `https://www.bing.com/videos/search?q=${ibSearchBox.current.value}`;
      if (searchWebsite === "google") window.open(linkGoogle, "_blank");
      else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
      else if (searchWebsite === "bing") window.open(linkBing, "_blank");
    } else if (searchType === "map") {
      let linkGoogle = `https://www.google.com/maps?q=${ibSearchBox.current.value}`;
      let linkYandex = `https://yandex.com.tr/harita/?text=${ibSearchBox.current.value}`;
      let linkBing = `https://www.bing.com/maps?q=${ibSearchBox.current.value}`;
      if (searchWebsite === "google") window.open(linkGoogle, "_blank");
      else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
      else if (searchWebsite === "bing") window.open(linkBing, "_blank");
    } else if (searchType === "website") {
      let linkGoogle = `https://www.google.com/search?q=site%3Arerererarara.net+${ibSearchBox.current.value}`;
      let linkYandex = `https://yandex.com.tr/search/?text=url%3Drerererarara.net+${ibSearchBox.current.value}`;
      let linkBing = `https://www.bing.com/search?q=site%3A"rerererarara.net%22+${ibSearchBox.current.value}`;
      if (searchWebsite === "google") window.open(linkGoogle, "_blank");
      else if (searchWebsite === "yandex") window.open(linkYandex, "_blank");
      else if (searchWebsite === "bing") window.open(linkBing, "_blank");
    }
  };
  return (
    <>
      <div className="form-group mt-3">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <select
              className={`form-control rounded-0 bg-transparent text-${props.colorTextData.mains} border-0 searchBorder`}
              onChange={onSearchWebsiteChange}
              value={searchWebsite}
            >
              <option value="google" className={`text-${props.colorTextData.mains}`}>
                Google
              </option>
              <option value="yandex" className={`text-${props.colorTextData.mains}`}>
                Yandex
              </option>
              <option value="bing" className={`text-${props.colorTextData.mains}`}>
                Bing
              </option>
            </select>
          </div>
          <div className="input-group-prepend">
            <select
              className={`form-control rounded-0 bg-transparent text-${props.colorTextData.mains} border-0 searchBorder`}
              onChange={onSearchTypeChange}
              value={searchType}
            >
              <option value="default" className={`text-${props.colorTextData.mains}`}>
                Tümü
              </option>
              <option value="image" className={`text-${props.colorTextData.mains}`}>
                Görseller
              </option>
              <option value="video" className={`text-${props.colorTextData.mains}`}>
                Videolar
              </option>
              <option value="map" className={`text-${props.colorTextData.mains}`}>
                Harita
              </option>
              <option value="website" className={`text-${props.colorTextData.mains}`}>
                Website
              </option>
            </select>
          </div>

          <input
            type="text"
            ref={ibSearchBox}
            className={`form-control rounded-0 bg-transparent text-${props.colorTextData.mains} border-0 searchBorder border-${props.colorTextData.mains}`}
            placeholder="Aramak istediğiniz.."
          />
          <div className="input-group-append">
            <button className={`btn btn-outline-${props.colorTextData.mains} px-5`} onClick={btnSearchClick}>
              Ara
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
