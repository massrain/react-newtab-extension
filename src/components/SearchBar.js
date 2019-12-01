import React, { useRef } from "react";

const SearchBar = props => {
  const ibSearchBox = useRef(null);
  /*  
  const [searchWebsite, setSearchWebsite] = useState("google");
  const [searchType, setSearchType] = useState("default");

  const onSearchWebsiteChange = e => {
    setSearchWebsite(e.target.value);
  };
  const onSearchTypeChange = e => {
    setSearchType(e.target.value);
  };
    const btnSearchClick = e => {
    e.preventDefault();
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
      document.getElementById("theForm").submit();
      //let linkGoogle = `https://www.google.com/search?q=site%3Arerererarara.net+${ibSearchBox.current.value}`;
      //let linkYandex = `https://yandex.com.tr/search/?text=url%3Drerererarara.net+${ibSearchBox.current.value}`;
      //let linkBing = `https://www.bing.com/search?q=site%3A"rerererarara.net%22+${ibSearchBox.current.value}`;
      //if (searchWebsite === "google") window.open(linkGoogle, "_blank");
      //else if (searchWebsite === "yandex") window.open(linkGoogle, "_blank");
      //else if (searchWebsite === "bing") window.open(linkGoogle, "_blank");
    }
  }; */

  const btnSearchClick2 = () => {
    document.getElementById("theForm").submit();
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
          <input type="hidden" id="cx" name="cx" value="partner-pub-1206609202738714:7727531761" />
          <div className="input-group mb-3">
            {/*             <div className="input-group-prepend">
              <select
                className={`form-control rounded-0 bg-transparent text-${props.colorTextData.mains} border-0 searchBorder`}
                onChange={onSearchWebsiteChange}
                value={searchWebsite}
              >
                <option value="google" className={`text-${props.colorTextData.mains} bg-transparent`}>
                  Google
                </option>
                <option value="yandex" className={`text-${props.colorTextData.mains} bg-transparent`}>
                  Yandex
                </option>
                <option value="bing" className={`text-${props.colorTextData.mains} bg-transparent`}>
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
 */}
            <input
              type="text"
              ref={ibSearchBox}
              name="q"
              className={`form-control rounded-0 bg-transparent text-${props.colorTextData.mains} border-0 searchBorder border-${props.colorTextData.mains}`}
              placeholder="Aramak istediğiniz.."
              onKeyDown={event => {
                if (event.key === "Enter") {
                  btnSearchClick2(event);
                }
              }}
            />
            <div className="input-group-append">
              <input type="submit" className={`btn btn-outline-${props.colorTextData.mains} px-5`} value={"Ara"} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;

/* 
script async src='https://cse.google.com/cse.js?cx=partner-pub-1206609202738714:7727531761'></script>
 */

/* 
 
 
Ekran boyutundaki küçülme & büyülmeye görebildiğim kadar baktım ve müdahale ettim. Windows, Linux, Mac'deki Chrome'larda veya her Chrome'da yazı boyutundan vs dolayı aynı cevabı alamayabiliyorum. Kapsamlı olarak test edip düzeltmelerini yapacağım. 1366x768 ve 1920x1080 benim 2 ekranın çözünürlüğü ve zaten dünyada en çok kullanılan 2 çözünürlük; yaparken ikisine de odaklandım.

Duvar kağıtları seçimi ve notlar'a ekranda kendi alanları dışında herhangi bir yere tıklandığında kapatma koydum. Ancak bahsettiğim ufak bug'ı dün de çözemedim. Sadece kendi butonlarına tıklandığında önce dışarıya tıklandığı için kapanıyor, sonra butona tıklandığı için açılıyor; 10 farklı yöntem denedim sanırım. Şimdi de bakıyorum, farklı bir yöntemle çözülür en olmadı. Bu hata sebebiyle kendi alanları dışına tıklanma özelliğini deaktif ettim.(Duvarkağıdı seçiminde örnek olarak kalması için aktif)

Custom Search eklendi. Ama arama yaptığımda tüm web'de arıyor sadece senin websitedende değil. Custom search'de böyle bi özellik var onu açmış olabilirsin. cse google sitesinden bakabilirsin. Ben kendi sitemde denedim örneğin; sadece kendi sitemde arama yapıyorum; ama senin kodu koyunca tüm web'de arıyor. Acaba arama motoru kimliğinde mi bir problem var dedim. Bi ona bakıp bana gönderebilirsin. Ayrıca custom search'i nasıl aratsın kullanıcı. İlk seçim kutusuna mı bir seçenek koyalım (google,bing) yazan yere; yoksa ikinci seçim kutusuna mı? (görsellerde ara, haritada ara, webde ara-< custom search bu). Ben 2. kutuda website seçeneğinde bıraktım lakin bana biraz göz önünde değilmiş gibi geldi. Onu ilk seçim kutusuna da koyabilirim; veya google-bing vs'yi kaldırıp direk custom search'i de bırakabilirim, ne dersen.

İkon ekleme sayfası var abi bir kaç ana websitesiyle. Orada şöyle bir durum var. O ana sık ziyaret edilenler kutusu tıklanıp basılı tutulup hareket ettirilebiliyor sola sağa aşağı vs. Lakin biz aynı zamanda da sağ tık menüsü eklemek istedik. 2'sini aynı yerlerde aynı aksiyonlara sokamadım bu bizi baya uğraştırdı. Sana gönderdiğim halinde sadece sağ tık Site isminin üzerindeyken vardı; fare imlecini değiştirerek oralarda bir aksiyon var havasını kullanıcıya vermeye çalışmıştım. Ben şimdi onu biraz genişlettim. Aynı zamanda bir buton da sağ üste koydum menüyü açmak için. Eğer kullanıcılar sağ tık yapabileceğini anlamazlar diyor isen; o ufak rahatsızlık vermeyecek şekilde menü butonundan menüyü açabilirler; anlarlar diyor isen ikonu kaldırayım ismin üzerine sağ tıklama aktif kalsın. Veya ikisi de kalsın. Ben 2sini de aktif ettim şu anda.

*/
