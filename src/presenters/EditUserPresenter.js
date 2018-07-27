import React from 'react';

export default function EditUserPresenter(props){
  const cu = props.currentUserObject
  const isDog = props.currentUserObject.type === 'Dog'
  return(
    <div className='user-type-page'>
    <form onSubmit={props.onSubmitHandler}>
    <div className="form-group">
    <label htmlFor="InputName">Name</label>
    <input type="text" name="username" className="form-control" id="newUserName"  placeholder="Enter Name" defaultValue={cu.Name} required/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" name="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" defaultValue={cu.Email} placeholder="Enter email" required/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputNumber">Phone Number</label>
    <input inputMode="number" type="number" name="phone" className="form-control" id="InputPhone" aria-describedby="telHelp" placeholder="38655456782" defaultValue={cu.Phone} required/>
    </div>
    {/* <div className="form-group">
    <label htmlFor="InputPassword1">Password</label>
    <input type="password" name="password" className="form-control" id="InputPassword1" placeholder="Password" required/>
    </div> */}
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <label className="" htmlFor="Radios1">
    <input  type="radio" name="isDog" id="Dog" value="Dog" autoComplete="off" defaultChecked={isDog} />
    Dog Owner
    </label>
    <label className="" htmlFor="Radios2">
    <input type="radio" name="isDog" id="Walker" autoComplete="off" value="Walker" defaultChecked={!isDog}/>
    Walker
    </label>
    </div>
    <div className="form-group">
    <label htmlFor="FormControlTextarea1">Profile Bio</label>
    <textarea className="form-control" name="Bio" id="FormControlTextarea1" rows="3" placeholder="Tell me about yourself" defaultValue={cu.Bio}></textarea>
    </div>
    <div className="form-group">
    <label htmlFor="ImageUrl">Image Url</label>
    <input type="text" name="Pic" className="form-control" id="imageUrl" aria-describedby="emailHelp" placeholder="Enter full Url" defaultValue={cu.Pic} required/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
