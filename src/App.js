import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const travel = {
    Northern: [
      { name: "Kashmir", ratting: 9.8 },
      { name: "Kullu and Manali,", ratting: 8.7 },
      { name: "Shimla", ratting: 8.3 }
    ],
    Eastern: [
      { name: "Majuli, Assam", ratting: 9.8 },
      { name: "Darjeeling, West Bengal", ratting: 8.9 },
      { name: "Tawang, Arunachal Pradesh ", ratting: 9.2 }
    ],
    Southern: [
      { name: "Ooty and Coonoor	Chennai", ratting: 9.8 },
      { name: "Hampi	Varkala", ratting: 8.0 },
      { name: "Tanjore	Madurai", ratting: 8.6 }
    ],
    Western: [
      { name: "Mahabaleshwar.", ratting: 9.6 },
      { name: "Panchgani", ratting: 8.9 },
      { name: "Khandala ", ratting: 9.0 }
    ]
  };
  const [show, setShow] = useState([]);
  var type = Object.keys(travel);

  function clickHandler(item) {
    var zone = travel[item];
    setShow(zone);
    console.log(zone);
  }

  return (
    <div className="App">
      <h1>🗺️Travelguide</h1>
      <h2>Checkout top most famous places in India🗻 & Start the tour</h2>

      <div>
        {type.map((item) => (
          <button onClick={() => clickHandler(item)}>{item}</button>
        ))}
      </div>
      <hr />
      <div>
        {show.map((item) => (
          <div className="result">
            <p> {item.name}</p>
            <p className="newp">{item.ratting}/10</p>
          </div>
        ))}
      </div>
    </div>
  );
}
