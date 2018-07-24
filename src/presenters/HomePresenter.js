import * as React from 'react';
import { Link } from 'react-router-dom';

export default function UserTypePage(props) {
  return (
    <div className='home-presenter'>
      <h1>Tinderx for Puppies</h1>

      <div className='home-presenter-login'>
        <h2>Login</h2>
        <form onSubmit={function (event) {
          const nb = event.target.elements["userId"].value;
          props.setCurrentUser(parseInt(nb));
          event.preventDefault()
        }}>
          <input type="number" name="userId" ></input>
        </form>
      </div>
      <div className='home-presenter-sign-up'>

      </div>
    </div>
  )
}