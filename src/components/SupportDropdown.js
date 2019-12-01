import React from "react";
import { useTranslation } from "react-i18next";

export const SupportDropdown = props => {
  const { t } = useTranslation();

  return (
    <>
      <div className="row no-gutters justify-content-end pb-1 pr-1">
        <div className={`${props.iconsVisibility === "true" ? "col-7 p-2" : "col-12 p-4"}`}>
          <div className="btn-group btn-block dropup SupportButton navButtons">
            <button
              className={`btn btn-sm btn-outline-${props.colorTextData.navButtons} dropdown-toggle`}
              data-toggle="dropdown"
              data-offset="-150,1"
            >
              {props.iconsVisibility === "true" ? (
                <img src={"/assets/site/support.png"} className="img-fluid" alt="" width={24} />
              ) : (
                t("support.button")
              )}
            </button>
            <div className={`dropdown-menu bg-transparent border border-${props.colorTextData.navButtons}`}>
              <button className={`btn btn-outline-${props.colorTextData.navButtons} btn-block rounded-0`}>
                {t("support.link_1")}
              </button>
              <button className={`btn btn-outline-${props.colorTextData.navButtons} btn-block rounded-0`}>
                {t("support.link_2")}
              </button>
              <button className={`btn btn-outline-${props.colorTextData.navButtons} btn-block rounded-0`}>
                {t("support.link_3")}
              </button>
              <button className={`btn btn-outline-${props.colorTextData.navButtons} btn-block rounded-0`}>
                {t("support.link_4")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
