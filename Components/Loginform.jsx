import React from 'react';

const Loginform = () => {
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

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Loginform;