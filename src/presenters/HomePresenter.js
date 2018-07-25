import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePresenter(props) {
  return (
    <div className='home-presenter'>
      
      <h1>PET PALS!</h1>

      <div className='home-presenter-login'>
        
        <form name="submitMe" onSubmit={(event) => {event.preventDefault()}}>
          <legend>Login</legend>
          <input type="email" name="userEmail" id="userEmail" onChange={props.handleChange}></input>
            <label htmlFor="userEmail">Email</label>
          <input type="password" name="userPassword" id="userPassword" onChange={props.handleChange}></input>
            <label htmlFor="userPassword">Password</label>
         <button onClick={() => props.handleEvent()}>Submit</button>
        </form>
        
      </div>

      <div className='home-presenter-sign-up'>
        <Link to={ `/new-user` }><button>Create New User</button></Link>
      </div>

    </div>
  )
}
