import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

const SearchBar = props => {
  const ibSearchBox = useRef(null);
  const { t } = useTranslation();

  const btnSearchClick2 = e => {
    e.preventDefault();
    document.getElementById("theForm").submit();

    /*     if (ibSearchBox.current.value === null || ibSearchBox.current.value === "") {
      console.log("empty search");
    } else {
      window.location.href = `http://addiyos.com/search?q=${ibSearchBox.current.value}`;
    } */
  };
  return (
    <>
      <div className="form-group mt-3">
        <form
          onSubmit={btnSearchClick2}
          id="theForm"
          method="get"
          title="Search Form"
          target="_blank"
          action="https://cse.google.com/cse/publicurl"
        >
          <div className="input-group mb-3">
            {/* <input type="hidden" id="cx" name="cx" value="partner-pub-8838201208897308:9416942362" /> */}
            <input type="hidden" id="cx" name="cx" value="003014573317456829330:tqxdlhxphtr" />
            <input
              type="text"
              ref={ibSearchBox}
              name="q"
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

/* 
'https://cse.google.com/cse.js?cx=partner-pub-8838201208897308:9416942362'
*/
