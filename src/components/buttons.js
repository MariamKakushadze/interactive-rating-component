import React from "react";

function Buttons({ setCard }) {
  let numbers = [1, 2, 3, 4, 5];

  return (
    <div className="btn-container">
      {numbers.map((num) => {
        return (
          <button
            className="round-bg rate-num"
            onClick={() => {
              setCard(num);
            }}
            key={num}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}
export default Buttons;
