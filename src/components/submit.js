import "./submit.css";
import React from "react";

function Submit({card, setPopup}) {
  const Handle = () => {
    if (!card){
    setPopup(true)};
  };
  return (
    <button
      type="submit"
      className="submit"
      onClick={() => {
        Handle();
      }}
    >
      Submit
    </button>
  );
}
export default Submit;
