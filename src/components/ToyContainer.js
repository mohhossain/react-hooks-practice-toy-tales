import React from "react";
import { useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const [search, setSearch] = useState('')
  console.log(toys)
  console.log(search, '-------------------')

  const filteredToys = toys.filter(toy => {
    if(search === ""){
      return true
    }
    return toy.name.toLowerCase().includes(search.toLowerCase())
  })

  console.log(filteredToys)

  const mappedToys = filteredToys.map(toy => {
    return(
      <div>
       
      <ToyCard key={toy.id} name={toy.name} image={toy.image} likes={toy.likes}/>


      </div>
    )
  })
  return (
    <div id="toy-collection">
       <form>
          <input onChange={e => setSearch(e.target.value)}></input>
        </form>
      {
      mappedToys
    }</div>
  );
}

export default ToyContainer;
