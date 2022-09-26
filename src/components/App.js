import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [toys, setToys] = useState([]);

  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const newToy = (toy) => {
    console.log(toy, "this is from the app");
    setToys([...toys, toy]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((toys) => {
        console.log(toys);
        setToys(toys);
      });
  }, []);

  return (
    <>
      <Header />
      {isButtonClicked ? <ToyForm newToy={newToy} /> : null}

      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
