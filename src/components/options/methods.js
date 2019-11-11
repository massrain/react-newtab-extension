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
