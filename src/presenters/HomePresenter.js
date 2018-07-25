import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePresenter(props) {
  return (
    <div className='home-presenter'>
      
      <h1>PET PALs!</h1>

      <div className='home-presenter-login'>
        
        <form onSubmit={(event) => {
          event.preventDefault();
          props.handleEvent(event, props.setCurrentUser);
          //props.url.match.path = `/${parseInt(props.userId)}/selector`;
          }}>
          <legend>Login</legend>
          <input type="number" name="userId" id="userId" ></input>
            <label htmlFor="userId">Name</label>
          {/* <input type="password" name="userPassword" id="userPassword"></input>
            <label>Password</label> */}
        </form>

        <Link to={`/${parseInt(props.currentUser, 10)}/selector`}><button>Submit</button></Link>
        
      </div>

      <div className='home-presenter-sign-up'>
        <Link to={ `/new-user` }><button>Create New User</button></Link>
      </div>

    </div>
  )
}
