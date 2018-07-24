import * as React from 'react';
import { Link } from 'react-router-dom';

export default function UserTypePage(props) {
  return (
    <div className='home-presenter'>
      <h1>Tinderx for Puppies</h1>

      <div className='home-presenter-login'>
        
        <form onSubmit={(event) => {handleEvent(event, props.setCurrentUser)}}>
        <legend>Login</legend>
          <input type="number" name="userId" id="userId"></input>
          <label for="userId">User ID</label>
        </form>
        <Link to={`/${parseInt(props.userId)}/selector`}>GO!</Link>
      </div>
      <div className='home-presenter-sign-up'>
      <form onSubmit={function (event) {
          event.preventDefault()
        }}>
        <legend>Sign up</legend>
          <input type="number" name="newUserId" id="newUserId" ></input>
          <label for="newUserId">User ID</label>
          <input type="text" name="userName" id="userName" ></input>
          <label for="userName">User Name</label>
          <input type="text" name="userType" id="userType" ></input>
          <label for="userType">User Type</label>
          <input type="text" name="userPic" id="userPic" ></input>
          <label for="userPic">User Picture</label>
          <input type="text" name="userBio" id="userBio" ></input>
          <label for="userBio">User Bio</label>

        </form>
      </div>
    </div>
  )
}

function handleEvent (event, setCurrentUserFunction) {
  const nb = event.target.elements["userId"].value;
  setCurrentUserFunction(parseInt(nb));
  event.preventDefault();
  
}