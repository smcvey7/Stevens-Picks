import React, {useState} from "react"

function NewPost({setCreateNew, currentUser, createPost}){
  const [newEntry, setNewEntry]=useState({
    "title": "",
    "link": "",
    "creator": currentUser,
    "img": "",
    "text": "",
    "type": "read",
    "likes": 0,
    "comments": []
  })

  function handleChange(e){
    const updatedInfo = {
      ...newEntry,
      [e.target.name]: e.target.value
    }
    setNewEntry(updatedInfo)
  }

  function handleSubmit(e){
    e.preventDefault();
    createPost(newEntry)
  }

  return(
    <div className="newPostForm flexContainer">
      <h2>Create Recommendation</h2>
      <form id="recommendationForm" onSubmit={handleSubmit}>
        <div className="flexContainer"><h4>Creator: <strong>{newEntry.creator}</strong></h4><br/></div>
        <div className="flexContainer"><h4 className="grow">Title:</h4><input className="growInput" name="title" value={newEntry.title} onChange={handleChange} /><br/></div>
        <div className="flexContainer"><h4 className="grow">Link:</h4><input className="growInput" name="link" value={newEntry.link} onChange={handleChange} /><br/></div>
        
        <div className="flexContainer"><h4 className="grow">Image URL:</h4><input className="growInput" name="img" value={newEntry.img} onChange={handleChange} /><br/></div>
        <div className="flexContainer"><h4 className="grow">Description:</h4> <textarea className="growInput" name="text" value={newEntry.text} onChange={handleChange} /><br/></div>
        Type: <select name="type" value={newEntry.type} onChange={handleChange}>
          <option>Read</option>
          <option>Watch</option>
          <option>Listen</option>
        </select><br/>
        <input className="sendButton" type="submit" /><button onClick={()=>setCreateNew(false)}>Cancel</button>
      </form>
    </div>
  )
};

export default NewPost