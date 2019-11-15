import React, { useState, useEffect } from "react";

const DigitalClock = props => {
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
    <span
      className="cursor--pointer"
      onClick={() => {
        props.dateTimeFormat === "en-US" ? props.setDateTimeFormat("tr-TR") : props.setDateTimeFormat("en-US");
      }}
    >
      {digitalClock.toLocaleTimeString(props.dateTimeFormat, { timeStyle: "short" })}
    </span>
  );
};

export default DigitalClock;
