// form for adding a new toy
import React, { useState } from "react";


function ToyForm( {handleAddingNewToyAndRendering }) {
  const [nameState, setNameState] = useState('')
  const [imageSrcState, setImageSrcState] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
    postToServer()
  }

  function handleValueChange(e) {
    setNameState(e.target.value)
  }

  function handleImageChange(e) {
    setImageSrcState(e.target.value)
  }

  function postToServer() {
    // make an object in the format of a new toy
    const newToyToAddObj = {
      name: nameState,
      image: imageSrcState,
      likes: 0
    }
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToyToAddObj)
    })
    .then(r => r.json())
    .then(newToyToAddObj => handleAddingNewToyAndRendering(newToyToAddObj))
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={nameState}
          onChange={handleValueChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={imageSrcState}
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
