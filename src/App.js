import React, { useEffect, useState } from "react";
import axios from "axios";
import Mainpage from "./Mainpage";
import { useTranslation } from "react-i18next";
import { useLocalStorage, initialLayout2, initialLayoutDetails } from "./components/options/methods";
import NavBar from "./components/NavBar";
import OptionsPopup from "./components/OptionsPopup";
import WeatherPopup from "./components/WeatherPopup";
import DigitalClock from "./components/DigitalClock";

import { ContextMenu, MenuItem } from "react-contextmenu";
import AddFrequentlyPopup from "./components/AddFrequentlyPopup,";
import iziToast from "izitoast";
import { SupportDropdown } from "./components/SupportDropdown";

const App = () => {
  const TextColors = {
    mains: "light",
    navButtons: "light",
    sides: "#ffffff"
  };
  const initialNavVisibilities = {
    Yardim: true,
    Yorumla: true,
    Havadurumu: true,
    Arkaplan: true,
    Anasayfa: true,
    Yerimleri: true,
    Gecmis: true,
    Notlar: true
  };
  const [imgBackground, setImgBackground] = useLocalStorage("backgroundimg", 5);
  const [imgBackgroundChoice, setImgBackgroundChoice] = useLocalStorage("backgroundimgchoice", "tabext");
  const [weatherCity, setWeatherCity] = useLocalStorage("weathercity", "");
  const [weatherUnits, setWeatherUnits] = useLocalStorage("weatherunits", "metric");
  const [LayoutData, setLayoutData] = useLocalStorage("freqlayouts", initialLayout2);
  const [LayoutDetails, setLayoutDetails] = useLocalStorage("freqlayoutdetails", initialLayoutDetails);
  const [colorTextData, setColorTextData] = useLocalStorage("colortextdata", TextColors);
  const [iconsVisibility, setIconsVisibility] = useLocalStorage("iconsvisibility", "true");
  const [Notes, setNotes] = useLocalStorage("quicknotes", ["İlk Notunuz..."]);
  const [NotesVisibility, setNotesVisibility] = useLocalStorage("notesvisibility", "none");
  const [OptionsVisibility, setOptionsVisibility] = useLocalStorage("optionsvisibility", "none");
  const [WeatherVisibility, setWeatherVisibility] = useLocalStorage("weathervisibility", "none");
  const [ChooseBgVisibility, setChooseBgVisibility] = useLocalStorage("choosebgvisibility", "none");
  const [navIconVisibilities, setNavIconVisibilities] = useLocalStorage("naviconvisibilities", initialNavVisibilities);
  const [dateTimeFormat, setDateTimeFormat] = useLocalStorage("datetimeformat", "tr-TR");
  const [languageChoice, setLanguageChoice] = useLocalStorage("language", "tr");

  const [BookmarksVisibility, setBookmarksVisibility] = useLocalStorage("bookmarksvisibility", "block");
  const [showModal, setShowModal] = useState(false);
  const [collectContextData, setCollectContextData] = useState(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (weatherCity === "") getLocation();
    if (localStorage.getItem("language") === '"en"') i18n.changeLanguage("en");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", function(event) {
      event.preventDefault();
    });
    return () => {
      // document.removeEventListener("contextmenu");
    };
  }, []);

  const showPosition = position => {
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
    axios
      .get(`https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?geoit=json`)
      .then(res => {
        if (res.data.city.toLowerCase() !== weatherCity.toLowerCase()) setWeatherCity(res.data.city);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      //navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
    } else {
      console.log("location not available");
    }
  };
  const backgroundStyle = {
    backgroundImage:
      imgBackgroundChoice === "tabext"
        ? // `url("/assets/wallpapers/firewatch${imgBackground}.jpg")`
          `url("/assets/wallpapers/bing${imgBackground}.jpg")`
        : `url("/assets/wallpapers/bingw32/wallpaper${imgBackground}.jpg")`
    //"url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=en-US)"
  };
  const btnChangeBackground = () => {
    console.log(backgroundStyle);
    if (imgBackground > 12) {
      setImgBackground(1);
    } else {
      let newNumber = imgBackground + 1;
      setImgBackground(newNumber);
    }
  };
  const changeWeatherVisibility = () => {
    WeatherVisibility === "none" ? setWeatherVisibility("block") : setWeatherVisibility("none");
  };
  const changeBookmarksVisibility = () => {
    BookmarksVisibility === "none" ? setBookmarksVisibility("block") : setBookmarksVisibility("none");
  };
  const changeWeatherCity = newCity => {
    setWeatherCity(newCity);
  };
  const changeWeatherUnits = newUnits => {
    setWeatherUnits(newUnits);
  };
  const btnRefreshBackground = () => {
    if (imgBackground > 12) {
      setImgBackground(1);
    } else {
      let newNumber = imgBackground + 1;
      setImgBackground(newNumber);
    }
  };
  const changeImgBackgroundChoice = e => {
    setImgBackgroundChoice(e.target.value);
  };
  const changeLayoutDetails = data => {
    let originalArray = LayoutDetails;
    let resultArray = originalArray.concat(data);
    setLayoutDetails(resultArray);
  };
  const changeIconsVisibility = e => {
    iconsVisibility === "true" ? setIconsVisibility("false") : setIconsVisibility("true");
  };
  const changeColorTextData = (newColor, keyColor) => {
    console.log(newColor);
    let resultWord;
    switch (newColor) {
      case "#2c3e50":
        resultWord = "primary";
        break;
      case "#95a5a6":
        resultWord = "secondary";
        break;
      case "#18bc9c":
        resultWord = "success";
        break;
      case "#3498db":
        resultWord = "info";
        break;
      case "#f39c12":
        resultWord = "warning";
        break;
      case "#e74c3c":
        resultWord = "danger";
        break;
      case "#ecf0f1":
        resultWord = "light";
        break;
      default:
        break;
    }
    let colorPack = colorTextData;
    colorPack[keyColor] = resultWord;
    setColorTextData(colorPack);
  };
  const changeNotesVisibility = () => {
    NotesVisibility === "none" ? setNotesVisibility("block") : setNotesVisibility("none");
  };
  const btnChooseBackground = () => {
    if (ChooseBgVisibility === "none") {
      setChooseBgVisibility("block");
    } else {
      setChooseBgVisibility("none");
    }
  };
  const selectImageBackground = value => {
    setImgBackgroundChoice("tabext");
    setImgBackground(value);
  };
  const btnBgImageClick = () => {
    setOptionsVisibility("none");
    changeWeatherVisibility();
    btnChooseBackground();
    changeBookmarksVisibility();
    changeNotesVisibility();
  };
  const handleCollect = props => {
    console.log(props);
    setCollectContextData([props.children[0].props["data-index"], props.children[0].props["data-id"]]);
  };
  const handleOpenAddFrequentlyModal = () => {
    setShowModal(true);
  };
  const handleCloseAddFrequentlyModal = () => {
    setShowModal(false);
  };
  const deleteWebsiteData = itemIndex => {
    console.log(LayoutDetails[itemIndex]);
    const isCorrectDetail = value => value !== LayoutDetails[itemIndex];
    let originalArray = LayoutDetails;
    let resultArray = originalArray.filter(isCorrectDetail);
    setLayoutDetails(resultArray);
  };
  const handleDeleteFrequently = () => {
    let itemIndex = collectContextData[0];
    let itemId = collectContextData[1];

    console.log(itemId);
    console.log(itemIndex);
    const isCorrectLg = value => value !== LayoutData.lg[itemIndex];
    const isCorrectMd = value => value !== LayoutData.md[itemIndex];
    const isCorrectSm = value => value !== LayoutData.sm[itemIndex];
    const isCorrectXs = value => value !== LayoutData.xs[itemIndex];
    const isCorrectXxs = value => value !== LayoutData.xxs[itemIndex];

    let originalArray = LayoutData;
    let resultArray = {};
    resultArray.lg = originalArray.lg.filter(isCorrectLg);
    resultArray.md = originalArray.md.filter(isCorrectMd);
    resultArray.sm = originalArray.sm.filter(isCorrectSm);
    resultArray.xs = originalArray.xs.filter(isCorrectXs);
    resultArray.xxs = originalArray.xxs.filter(isCorrectXxs);
    deleteWebsiteData(itemIndex);
    setLayoutData(resultArray);
    //props.setNotes(resultArray);
  };
  const handleResetLayout = () => {
    iziToast.question({
      timeout: 20000,
      close: false,
      overlay: true,
      displayMode: "once",
      id: "question",
      zindex: 999,
      title: t("reset_layout.warning"),
      message: t("reset_layout.text"),
      position: "center",
      buttons: [
        [
          `<button><b>${t("reset_layout.button_yes")}</b></button>`,
          function(instance, toast) {
            localStorage.removeItem("freqlayouts");
            localStorage.removeItem("freqlayoutdetails");
            window.location.reload();
            instance.hide({ transitionOut: "fadeOut" }, toast, "button");
          },
          true
        ],
        [
          `<button>${t("reset_layout.button_no")}</button>`,
          function(instance, toast) {
            instance.hide({ transitionOut: "fadeOut" }, toast, "button");
          }
        ]
      ]
    });
  };
  return (
    <>
      <ContextMenu id="some_unique_identifier" style={{ marginLeft: "-100px" }}>
        <MenuItem onClick={handleDeleteFrequently}>{t("rightclick_menu.delete")}</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={handleOpenAddFrequentlyModal}>{t("rightclick_menu.addnew")}</MenuItem>
        <MenuItem onClick={handleResetLayout}>{t("rightclick_menu.reset_layout")}</MenuItem>
      </ContextMenu>

      <div className="pageOverlay z-index-98"></div>
      <div className="bg-img BodyContent z-index-97" style={backgroundStyle} onClick={btnBgImageClick}></div>
      <div className="container-fluid p-0 BodyContent d-flex flex-column z-index-99">
        <div className="row no-gutters h-100">
          <div className="col-1">
            <div className="row no-gutters flex-column h-100 justify-content-between Navbar">
              <NavBar
                colorTextData={colorTextData}
                iconsVisibility={iconsVisibility}
                btnChangeBackground={btnChangeBackground}
                setOptionsVisibility={setOptionsVisibility}
                changeWeatherVisibility={changeWeatherVisibility}
                changeBookmarksVisibility={changeBookmarksVisibility}
                BookmarksVisibility={BookmarksVisibility}
                changeNotesVisibility={changeNotesVisibility}
                btnRefreshBackground={btnRefreshBackground}
                btnChooseBackground={btnChooseBackground}
                navIconVisibilities={navIconVisibilities}
                selectImageBackground={selectImageBackground}
                Notes={Notes}
                setNotes={setNotes}
              />
            </div>
          </div>
          <div className="col-10 d-flex flex-column">
            <div className="row no-gutters flex-grow-1 align-items-start justify-content-center">
              <div className="col-10">
                {BookmarksVisibility === "block" ? (
                  <div className="container py-3 mb-5 ContentContainer mt-4">
                    <Mainpage
                      LayoutData={LayoutData}
                      setLayoutData={setLayoutData}
                      colorTextData={colorTextData}
                      LayoutDetails={LayoutDetails}
                      changeLayoutDetails={changeLayoutDetails}
                      handleCollect={handleCollect}
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row no-gutters flex-grow-0 align-items-center">
              <div className="container">
                <div className="row no-gutters justify-content-center">
                  <div className="col-12 text-center">
                    <h3 className={`display-4 text-${colorTextData.mains}`}>
                      <DigitalClock dateTimeFormat={dateTimeFormat} setDateTimeFormat={setDateTimeFormat} />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 d-flex flex-column justify-content-end">
            <SupportDropdown colorTextData={colorTextData} iconsVisibility={iconsVisibility} />
          </div>
        </div>
      </div>

      <WeatherPopup
        WeatherVisibility={WeatherVisibility}
        weatherCity={weatherCity}
        setWeatherUnits={setWeatherUnits}
        weatherUnits={weatherUnits}
      />
      <OptionsPopup
        OptionsVisibility={OptionsVisibility}
        setOptionsVisibility={setOptionsVisibility}
        weatherCity={weatherCity}
        changeWeatherCity={changeWeatherCity}
        LayoutData={LayoutData}
        setLayoutData={setLayoutData}
        changeWeatherUnits={changeWeatherUnits}
        weatherUnits={weatherUnits}
        imgBackgroundChoice={imgBackgroundChoice}
        changeImgBackgroundChoice={changeImgBackgroundChoice}
        changeColorTextData={changeColorTextData}
        colorTextData={colorTextData}
        iconsVisibility={iconsVisibility}
        changeIconsVisibility={changeIconsVisibility}
        navIconVisibilities={navIconVisibilities}
        setNavIconVisibilities={setNavIconVisibilities}
        dateTimeFormat={dateTimeFormat}
        setDateTimeFormat={setDateTimeFormat}
        languageChoice={languageChoice}
        setLanguageChoice={setLanguageChoice}
      />

      <AddFrequentlyPopup
        changeLayoutDetails={changeLayoutDetails}
        LayoutData={LayoutData}
        setLayoutData={setLayoutData}
        handleOpenAddFrequentlyModal={handleOpenAddFrequentlyModal}
        handleCloseAddFrequentlyModal={handleCloseAddFrequentlyModal}
        showModal={showModal}
      />
    </>
  );
};

export default App;

/*
TODO: 
++ SIKKULLANILANLAR YENİ EKLE
++ ARKAPLAN API + KATEGORİ
++ SANTİGRAT FAHRENHEİT
++ YANDEX ARAMA
++ BİNG ARAMA
++ WEBSİTE İÇERİSİNDE ARAMA
++ SIK KULLANILANLAR BORDERCOLOR
++ BİNG ARKAPLANLARI
++ YER İMLERİ VE HİSTORY ÇEKİM BUTONLA
++ HİSTORY VE BOOKMARK LİNK FULL CARDTA
++ TEXTLER DİNAMİK
++ TEXTLER RENKLİ COLORPICKER
++ BUTON RENKLERİ
++ BUTON RENKLERI COLORPICKER

++ NAVBAR BUTON İKON
++ SIK KULLANILANLAR İKONLARI
++ HİSTORY VE BOOKMARK İCON

++ HAVADURUMU VISIBILITY PERSISTENT STATE
++ BOOKMARK + HISTORY WEBSITE ICONS

-- V2
++SAAT
++NAVBAR SOL
++NAVBAR BG HOVER
++İCONS HOVER BÜYÜME
++FREQUENTS STYLE
++SIK KULLANILANLAR STYLE
++ARAMA STYLE
++OPTIONS STYLE SOL
++BOOKMARKS İCONS
++HİSTORY İCONS
++FREQUENTS EKLEME
++BOOKMARK SİLME
WALLPAPER API

--v3
++ arama butonuna yazıp aratınca ENTER
++ resolution icons + grid
++ freq drag and drop, always draggable
++ freq right click menu
++ freq singlelayout click name or icon hover pointer
++ weather autolocation
++ quick notes
++ yer imlerini senkronize et
++ wallpapers random + selective
++ options menu add buttons single visiblity + date-time format
++ help modal
++ sidebar uzantıya yorum help btn
++ click closes modals,image click close others
++ notes popup css
++ tekil todo gösterimi
++ freq ondrag unclickable
++ freq dragging bottom makes scroller
++ navbar buton yorumla yönlendir
++ freq add freq mainstream options
leftmenuclick eveywhere bookmark programmaticaly open
-- notes draggable

--v4
responsiveness
onblur background notes
++custom search
tests:
custom search verilen linke çevril
freq box ikonu


--v5
--custom search first select
--custom search

++resimseçimi ve notlar sol kapanma sorunu giderildi.
++resimseçimi, notlar, geçmiş, bookmarklar sol tarafa ince şekilde yerleştirildi. resimseçimi veya notlar eski haline getirilebilir.
++havadurumu pozisyonu kayıt altına alınıyor. bir sonraki açılışta aynı yerde açılıyor. ekranın başka yerine tıklandığında kasıtlı olarak kapanmasını açmadım
 widget tarzı ekranda kalmasının olabileceğini göstermek için; ama o da istenirse diğerleri gibi kapat aç yapılabilir.
++havadurumu celcius-fahrenheit simgeler

++Yeni site ekleme menüsü, yeni bir site ana ekrana eklendiğinde kapanmıyor; eklemeye devam edilebilmesi için.
++En üstte sayfa başlangıcı için biraz boşluk var.
++Yerleşimi sıfırlarken uyarı veriliyor.
++Yeni ekleme penceresi ekranın ortasında değil, sağ tarafta ince.
++Yeni eklenenler 2.sıraya sağa doğru ekleniyor.
++Ekran resmi bing'den çekilenlerdeki problem giderildi. 
++Ikon yer değişimlerinin kayıt altına alınmaması sorunu giderildi.
--içe aktar
--hava durumu modal olabilir veya navbar butons disable


--v6
++Youtube ikonu ilk satırda
++Notlar biraz daha geniş
++ikonlar kısmını biraz küçülttüm yanlardaki blur kısımlarını; daha da küçülmeyi deneyeceğim.
++Anasayfa kapat-aç
++Sağ alta destek butonu

++havadurumu her açılışta geolocation
++içe aktar


--v7
++translations
--translations_days
--examples from jsonfile
++options_language
++suspense
*/
