import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

const SearchBar = props => {
  const ibSearchBox = useRef(null);
  const { t } = useTranslation();

  const btnSearchClick2 = e => {
    e.preventDefault();
    //document.getElementById("theForm").submit();
    if (ibSearchBox.current.value === null || ibSearchBox.current.value === "") {
      console.log("empty search");
    } else {
      window.location.href = `http://addiyos.com/search?q=${ibSearchBox.current.value}`;
    }
  };
  return (
    <>
      <div className="form-group mt-3">
        <form onSubmit={btnSearchClick2} target="_blank">
          <div className="input-group mb-3">
            <input
              type="text"
              ref={ibSearchBox}
              className={`form-control rounded-0 bg-transparent text-${props.colorTextData.mains} border-0 searchBorder border-${props.colorTextData.mains}`}
              placeholder={t("searchbar.input_placeholder")}
              onKeyDown={event => {
                if (event.key === "Enter") {
                  btnSearchClick2(event);
                }
              }}
            />
            <div className="input-group-append">
              <input
                type="submit"
                className={`btn btn-outline-${props.colorTextData.mains} px-5`}
                value={t("searchbar.confirm_button")}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
