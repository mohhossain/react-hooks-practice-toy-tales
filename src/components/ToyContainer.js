import React from "react";
import { useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  console.log(toys);
  return (
    <div id="toy-collection">
      {toys.map((toy) => {
        return <ToyCard key={toy.id} toy={toy}></ToyCard>;
      })}
    </div>
  );
}

export default ToyContainer;
