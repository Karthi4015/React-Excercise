import React, { useState } from 'react';
import Registeration from './Registeration';
import Loginform from './Loginform';

const Authentication = () => {   
  const [Pagevariant, setPage] = useState(null);
  
  return (
    <>  
      <section className='d-flex flex-column justify-content-center align-items-center  ' style={{ height: "100vh" }}>
        <article className='mb-3 w-75 d-flex justify-content-center align-items-center rounded'>
          <button 
            className="btn btn-primary flex-sm-wrap mx-3" 
            onClick={() => setPage("register")}  
          >
            Register
          </button>
     
          <button 
            className="btn btn-secondary mx-4" 
            onClick={() => setPage("login")} 
          >
            Sign in
          </button>
        </article>
        
        <article className='bg-info w-75' style={{ height: "50vh" }}>
          {
            Pagevariant === "register" ? (  
              <Registeration/> 
            ) : Pagevariant === "login" ? (
              <Loginform/>
            ) : (
              <p>Welcome to my App</p>  
            )
          }
        </article>
      </section>
    </>
  );
};

export default Authentication;
