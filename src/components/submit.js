import "./submit.css";
import React from "react";

function Submit({ card, setPopup }) {
  return (
    <button
      type="submit"
      className="submit"
      onClick={() => {
        if (card) {
          setPopup(true);
        }
      }}
    >
      Submit
    </button>
  );
}
export default Submit;
