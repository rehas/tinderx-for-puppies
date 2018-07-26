import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePresenter(props) {
  return (
    <div className='home-presenter'>
      <div className='home-presenter-login'>
        
        <form name="submitMe" onSubmit={(event) => {event.preventDefault()}}>
              <legend>Login</legend>
        <div className="form-row">
            <div className="form-group col">
              <input placeholder="Email Address" className="form-control" type="email" name="userEmail" id="userEmail" onChange={props.handleChange}/>
            </div>
            <div className="form-group col">
              <input placeholder="Password" className="form-control" type="password" name="userPassword" id="userPassword" onChange={props.handleChange}/>
        </div>
        
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={() => props.handleEvent()}>Login</button>
        </div>
        </form>
      </div>

      <div className='home-presenter-sign-up'>
        <Link to={ `/new-user` }><button className="btn btn-primary">Sign Up</button></Link>
      </div>

    </div>
  )
}


