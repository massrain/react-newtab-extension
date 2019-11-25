import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export const hexToBootstrapColors = hex => {
  let resultWord;
  switch (hex) {
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
  return resultWord;
};

export const bootstrapToHexColors = bootstrap => {
  let resultWord;
  switch (bootstrap) {
    case "primary":
      resultWord = "#2c3e50";
      break;
    case "secondary":
      resultWord = "95a5a6";
      break;
    case "success":
      resultWord = "#18bc9c";
      break;
    case "info":
      resultWord = "#3498db";
      break;
    case "warning":
      resultWord = "#f39c12";
      break;
    case "danger":
      resultWord = "#e74c3c";
      break;
    case "light":
      resultWord = "#ecf0f1";
      break;
    default:
      break;
  }
  return resultWord;
};

export const unixToDay = timestamp => {
  const days = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
  return days[new Date(timestamp * 1000).getDay()];
};

export const initialLayout2 = {
  lg: [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "b",
      x: 2,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "c",
      x: 4,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "d",
      x: 6,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "e",
      x: 8,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    }
  ],
  md: [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "b",
      x: 2,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "c",
      x: 4,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "d",
      x: 6,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "e",
      x: 8,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    }
  ],
  sm: [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "b",
      x: 2,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "c",
      x: 4,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "d",
      x: 6,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "e",
      x: 8,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    }
  ],
  xs: [
    {
      i: "a",
      x: 2,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "b",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "c",
      x: 4,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "d",
      x: 6,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "e",
      x: 8,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    }
  ],
  xxs: [
    {
      i: "a",
      x: 2,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "b",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "c",
      x: 4,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "d",
      x: 6,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    },
    {
      i: "e",
      x: 8,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    }
  ]
};

export const initialLayoutDetails = [
  {
    name: "Google",
    link: "https://google.com.tr",
    icon: "/assets/site/google.png"
  },
  {
    name: "Galatasaray Sözlük",
    link: "https://rerererarara.net",
    icon: "/assets/site/gssozluk.jpg"
  },
  {
    name: "Gmail",
    link: "https://gmail.com",
    icon: "/assets/site/gmail.png"
  },
  {
    name: "Ekşi Sözlük",
    link: "https://eksisozluk.com",
    icon: "/assets/site/eksisozluk.png"
  },
  {
    name: "Youtube",
    link: "https://youtube.com",
    icon: "/assets/site/youtube.png"
  }
];

export const freqBuiltInWebsites = [
  { name: "Instagram", link: "https://instagram.com", icon: "/assets/site/instagram.png" },
  { name: "Hepsiburada", link: "https://www.hepsiburada.com/", icon: "/assets/site/hepsiburada.png" },
  { name: "Drive", link: "https://drive.google.com/?usp=chrome_app", icon: "/assets/site/googledrive.png" },
  { name: "Netflix", link: "https://netflix.com", icon: "/assets/site/netflix.png" },
  { name: "E-Devlet", link: "https://www.turkiye.gov.tr/", icon: "/assets/site/edevlet.png" },
  { name: "Docs", link: "https://docs.google.com/", icon: "/assets/site/googledocs.png" },
  { name: "Twitter", link: "https://twitter.com/", icon: "/assets/site/twitter.png" },
  { name: "Spotify", link: "https://spotify.com", icon: "/assets/site/spotify.png" },
  { name: "Haritalar", link: "https://map.google.com", icon: "/assets/site/googlemaps.png" },
  { name: "Facebook", link: "https://www.facebook.com/", icon: "/assets/site/facebook.png" },
  { name: "Twitch", link: "https://twitch.tv", icon: "/assets/site/twitch.png" },
  { name: "Sahibinden", link: "https://www.sahibinden.com/", icon: "/assets/site/sahibinden.png" },
  { name: "n11", link: "https://www.n11.com/", icon: "/assets/site/n11.png" },
  { name: "Trendyol", link: "https://www.trendyol.com/", icon: "/assets/site/trendyol.png" },
  { name: "Hürriyet", link: "http://www.hurriyet.com.tr/", icon: "/assets/site/hurriyet.jpg" },
  { name: "GittiGidiyor", link: "https://www.gittigidiyor.com/", icon: "/assets/site/gittigidiyor.png" }
];
