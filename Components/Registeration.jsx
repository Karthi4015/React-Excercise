import React from 'react'

const Registeration = () => {
  return (
    <form className='d-flex flex-column justify-content-evenly align-items-center h-100 w-50 mx-auto'>
    <div className="mb-3 w-100">
      <label htmlFor="username" className="form-label">Username:</label>
      <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" />
    </div>
  
    <div className="mb-3 w-100">
      <label htmlFor="Password" className="form-label">Password:</label>
      <input type="password" className="form-control" id="Password" name="Password" placeholder="Enter password" />
    </div>
  
    <div className="mb-3 w-100">
      <label htmlFor="dob" className="form-label">DOB:</label>
      <input type="date" className="form-control" id="dob" name="dob" />
    </div>
  
    <div className="d-flex justify-content-between w-100 mx-4">
      <button type="submit" className="btn btn-primary mx-1">Register</button>
      <button type="button" className="btn btn-secondary ">Cancel</button>
    </div>
  </form>
  
  )
}

export default Registeration