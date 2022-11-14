import React from "react";

function Buttons(props,{card}) {
  let numbers = props.numbers;
  return (
    <div className="btn-container">
      {numbers.map((num, key) => {
        return (
          <button
            className="round-bg rate-num"
            key={key}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}
export default Buttons;
