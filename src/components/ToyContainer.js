// render list/all toy cards
import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ handleRenderingToys, toysToDisplay, handleDeletingToyAndRendering, handleUpdatingLikesAndRendering }) {


  // rendering all toy cards from fetch
  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(r => r.json())
      .then(toysArr => {
        handleRenderingToys(toysArr)
      })
  }, [])

  return (
    <div id="toy-collection">
      <ToyCard
        toysToDisplay={toysToDisplay}
        handleDeletingToyAndRendering={handleDeletingToyAndRendering}
        handleUpdatingLikesAndRendering={handleUpdatingLikesAndRendering}
      />
    </div>
  );
}

export default ToyContainer;
