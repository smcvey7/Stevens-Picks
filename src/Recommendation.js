import React, {useState} from "react";

function Recommendation({setCreateNew}){
  const [newEntry, setNewEntry]=useState({
    "title": "",
    "creator": "",
    "img": "",
    "text": "",
    "type": "",
    "likes": 0
  })

  function handleChange(e){
    const updatedInfo = {
      ...newEntry,
      [e.target.name]: e.target.value
    }
    setNewEntry(updatedInfo)
  }

  return(
    <div className=" accountForm">
      <h2>Create Recommendation</h2>
      <form id="recommendationForm">
        Title:<br/><input name="title" value={newEntry.title} onChange={handleChange} /><br/>
        Creator:<br/><input name="creator" value={newEntry.creator} onChange={handleChange} /><br/>
        Image URL:<br/><input name="img" value={newEntry.img} onChange={handleChange} /><br/>
        Description:<br/><textarea name="text" value={newEntry.text} onChange={handleChange} /><br/>
        <select value={newEntry.type} onChange={handleChange}>
          <option>Read</option>
          <option>Watch</option>
          <option>Listen</option>
        </select><br/>
        <input className="sendButton" type="submit" /><button onClick={()=>setCreateNew(false)}>Cancel</button>
      </form>
    </div>
  )
};

export default Recommendation