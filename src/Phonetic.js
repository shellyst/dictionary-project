import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  function playSound() {
    audio.play();
  }

  return (
    <div className="Phonetics">
      <span onClick={playSound}>▶ Listen</span>
      {props.phonetic.text}
    </div>
  );
}
