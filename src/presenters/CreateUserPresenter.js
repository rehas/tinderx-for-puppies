import React from 'react';

export default function CreateUserPresenter(props){

  console.log(props)
  return(
    <div className='user-type-page'>
    
    
    <form onSubmit={props.onSubmitHandler}>
    <div className="form-group">
    <label htmlFor="InputName">Name</label>
    <input type="text" name="username" className="form-control" id="newUserName"  placeholder="Enter Name" required/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" name="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    </div>
    <div className="form-group">
    <label htmlFor="InputPassword1">Password</label>
    <input type="password" name="password" className="form-control" id="InputPassword1" placeholder="Password" required/>
    </div>
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="" htmlFor="Radios1">
        <input  type="radio" name="isDog" id="Dog" value="Dog" autoComplete="off" defaultChecked />
        Dog Owner
        </label>
        <label className="" htmlFor="Radios2">
        <input type="radio" name="isDog" id="Walker" autoComplete="off" value="Walker"/>
        Walker
        </label>
    </div>
    <div className="form-group">
    <label htmlFor="FormControlTextarea1">Profile Bio</label>
    <textarea className="form-control" name="Bio" id="FormControlTextarea1" rows="3" placeholder="Tell me about yourself"></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="ImageUrl">Image Url</label>
    <input type="text" name="Pic" className="form-control" id="imageUrl" aria-describedby="emailHelp" placeholder="Enter full Url" required/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    
    
    
    
    
    
    </div>
  )
}
