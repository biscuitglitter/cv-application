import React, { useState } from 'react';

export function generalInfo() {
    // declare state variable
    const [info, setInfo] = useState({
        fullname: "", 
        profession: "",
        email: ""
    });

    const handleChange = (e) => {
        setInfo({
          ...info,
          [e.target.name]: e.target.value
        });
        console.log(info);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setInfo({...info})
    }

    return (
      <div>
      <div className="generalInfo">
      <form className="form" onSubmit={handleSubmit}>
      <h1>Personal Details</h1>
          <label>
    <input type="text" placeholder="full name" name="fullname" value={user.fullname} onChange={handleChange} />
          </label>
          <label>
              <input type="text" placeholder="profession" name="profession" value={user.profession} onChange={handleChange} />
          </label>
          <label>
              <input type="text" placeholder="email@example.com" name="email" value={user.email} onChange={handleChange} />
          </label>
          <button onClick={this.handleSubmit}>Save</button>
      </form>
      <div className="user">
        {user.map((user) => {
          return (
            <>
              <div className="user-container" key={user.id}>
                <div>
                  <h3>
                    {user.firstname} {user.lastname}
                  </h3>
                  <h3>ID: {user.id}</h3>
                  <h3>DOB: {user.dob}</h3>
                </div>
                <div className="btns">
                  <Link className="edit" to={`/edit/${user.id}`}>
                    <h3 className="edit">EDIT</h3>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
            </div>
            </div>
)
}