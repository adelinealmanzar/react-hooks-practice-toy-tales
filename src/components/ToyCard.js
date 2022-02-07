// render individual card info
import React from "react";

function ToyCard({ toysToDisplay, handleDeletingToyAndRendering, handleUpdatingLikesAndRendering}) {

  function deleteToyObjInServer(toy) {
  // want to delete the toy object (via id) in question
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE'
    })
    handleDeletingToyAndRendering(toy.id)
    // pass the toy.id data up to parent so parent can handle the delete and set the state with a new array
  }

  function patchLikesInServer(toy) {
    const likeNumObj = {
      likes: toy.likes + 1
    }
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(likeNumObj)
    })
      .then(r => r.json())
      .then(toyObjLikesUpdated => handleUpdatingLikesAndRendering(toyObjLikesUpdated))
  }

  return (
    <>
      {toysToDisplay.map(toy => {
        return (
          <div className="card" key={toy.name}>
            <h2>{toy.name}</h2>
            <img
              src={toy.image}
              alt={toy.name}
              className="toy-avatar"
            />
            <p>{`Likes: ${toy.likes}`} Likes </p>
            <button className="like-btn" onClick={() => patchLikesInServer(toy)}>Like {"<3"}</button>
            <button className="del-btn" onClick={() => deleteToyObjInServer(toy)}>Donate to GoodWill</button>
          </div>
        )
      })}
    </>
  );
}

export default ToyCard;
