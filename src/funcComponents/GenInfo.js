import React, { useState } from 'react';
import './styles/GeneralInfo.css'

export default function GenInfo() {
    // declare state variable
  const [info, setInfo] = useState({ fullname: "", profession: "", email: "" });
  const [showMore, setShowMore] = useState(false);
 
  const handleChange = (event) => {
    event.preventDefault();
        setInfo({
          ...info,
          [event.target.name]: event.target.value
        });
  };
      
  function handleShowClick (event) {
    event.preventDefault();
    setShowMore(!showMore);
  }

    return (
      <div className="generalInfo">
      <form className="form">
      <h1>Personal Details</h1>
          <label>
    <input type="text" placeholder="full name" name="fullname" value={info.fullname} onChange={handleChange} />
          </label>
          <label>
              <input type="text" placeholder="profession" name="profession" value={info.profession} onChange={handleChange} />
          </label>
          <label>
              <input type="text" placeholder="email@example.com" name="email" value={info.email} onChange={handleChange} />
          </label>
          <button onClick={handleShowClick}>
            {showMore ? 'Hide' : 'Show'} 
            </button>
        </form> 
        {showMore && <div className="generalInfoRendered">
        <div className="generalInfoContainer">
        <div className="fullName"> {info.fullname.toUpperCase()} </div>
        <div className="currentProfession"> {info.profession} </div>
        <div className="email"> {info.email} </div>
        </div>
    </div>}
      </div>         
)
}

