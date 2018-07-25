import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateUserPresenter(props){

  console.log(props)
  return(
    <div className='user-type-page'>
    
    
    <form onSubmit={props.onSubmitHandler}>
    <div className="form-group">
    <label htmlFor="exampleInputName">Name</label>
    <input type="text" name="username" className="form-control" id="newUserName"  placeholder="Enter Name" required/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
    </div>
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="" htmlFor="exampleRadios1">
        <input  type="radio" name="isDog" id="Dog" value="Dog" autoComplete="off" defaultChecked />
        Dog Owner
        </label>
        <label className="" htmlFor="exampleRadios2">
        <input type="radio" name="isDog" id="Walker" autoComplete="off" value="Walker"/>
        Walker
        </label>
    </div>
    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Profile Bio</label>
    <textarea className="form-control" name="Bio" id="exampleFormControlTextarea1" rows="3" placeholder="Tell me about yourself"></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Image Url</label>
    <input type="text" name="Pic" className="form-control" id="imageUrl" aria-describedby="emailHelp" placeholder="Enter full Url" required/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    
    
    
    
    
    
    </div>
  )
}
{/* <form onSubmit={function (event) {event.preventDefault()}}> */}
{/* <input type="text" name="newUserName" id="newUserName" ></input>
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
<label htmlFor="userBio">Bio</label> */}

// <div>
//     <Link to={`/${parseInt(props.currentUser, 10)}/selector`}><button>Submit</button></Link>
//     </div>