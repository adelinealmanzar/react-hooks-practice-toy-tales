import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysToDisplay, setToysToDisplay] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleRenderingToys(toysArr) {
    setToysToDisplay(toysArr)
  }

  function handleAddingNewToyAndRendering(newToyToAddObj) {
    const addedToyArr = [newToyToAddObj, ...toysToDisplay]
    setToysToDisplay(addedToyArr)
  }

  function handleDeletingToyAndRendering(toyID) {
    const deletedToyArr = toysToDisplay.filter(toy => toy.id !== toyID)
    setToysToDisplay(deletedToyArr)
  }

  function handleUpdatingLikesAndRendering(toyObjLikesUpdated) {
    const updatedLikesToyArr = toysToDisplay.map(toy => {
      // if the toy el id is the same as the toy object's id, then to that object we want to update its key (in the return we return the updated key)
      if (toy.id === toyObjLikesUpdated.id) {
        // return the object update that we defined in grandchild by updating object via key value
        return toyObjLikesUpdated
      } else {
        // else just return the elements of the array as the new children of the array copy
        return toy
      }
    })
    setToysToDisplay(updatedLikesToyArr)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddingNewToyAndRendering={handleAddingNewToyAndRendering}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        handleRenderingToys={handleRenderingToys}
        toysToDisplay={toysToDisplay}
        handleDeletingToyAndRendering={handleDeletingToyAndRendering}
        handleUpdatingLikesAndRendering={handleUpdatingLikesAndRendering}
      />
    </>
  );
}

export default App;