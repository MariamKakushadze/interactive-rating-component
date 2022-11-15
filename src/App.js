import Card from "./components/card";
import PopUp from "./components/popup";
import React, { useState } from "react";

function App() {
  const [card, setCard] = useState();
  const [popup, setPopup] = useState(false);
 
  return (
    <div className="card">
      {!popup ? (
        <Card setPopup={setPopup} card={card} setCard={setCard} />
      ) : (
        <PopUp  card={card} />
      )}
    </div>
  );
}

export default App;
