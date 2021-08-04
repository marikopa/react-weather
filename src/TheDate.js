import React from "react";

export default function TheDate(props) {
  let days = [
    "Sonntag",
    "Montag",
    "Diensdag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {" "}
      <h3>
        {" "}
        {day} {hours}:{minutes}{" "}
      </h3>
    </div>
  );
}
