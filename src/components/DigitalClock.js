import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [digitalClock, setDigitalClock] = useState(new Date());

  useEffect(() => {
    let update = setInterval(() => {
      setDigitalClock(new Date());
    }, 1 * 1000); // every 1 seconds
    return () => {
      clearInterval(update);
    };
  }, []);
  return (
    <>{digitalClock.toLocaleTimeString("tr-TR", { timeStyle: "short" })}</>
  );
};

export default DigitalClock;
