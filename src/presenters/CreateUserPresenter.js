import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateUserPresenter(props){
  return(
    <div className='user-type-page'>
     
      <form onSubmit={function (event) {event.preventDefault()}}>
        <legend>Sign up</legend>

        <input type="text" name="newUserName" id="newUserName" ></input>
          <label htmlFor="newUserName" >User Name</label>
        <input type="password" name="newUserPassword" id="newUserPassword" ></input>
          <label htmlFor="newUserPassword" >Password</label>

        <div>  
          <legend>Select a User Type</legend>
            <input type="radio" name="userType" id="walker" defaultChecked ></input>
              <label htmlFor="walker">Walker</label>
            <input type="radio" name="userType" id="dog" ></input>
              <label htmlFor="dog">Dog</label>
        </div>

        <input type="text" name="userPic" id="userPic" ></input>
          <label htmlFor="userPic">Profile Picture</label>
        <input type="text" name="userBio" id="userBio" ></input>
          <label htmlFor="userBio">Bio</label>

        <div>
          <Link to={`/${parseInt(props.currentUser, 10)}/selector`}><button>Submit</button></Link>
        </div>

      </form>

    </div>
  )
}