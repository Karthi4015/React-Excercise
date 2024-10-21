import React from 'react'

const ProfileCard = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '90vh' }} 
    >
      <div className="card" style={{ width: '18rem' }}>
        <img src="IMG_5658.jpg" className="card-img-top" alt="Profile" />
        <p className="card-text d-flex justify-content-center align-items-center fw-bold"> Full Stack Developer</p>
        <div className="card-body">
          <p className="card-text">
            <li>NAME  :  KARTHI</li>
           <li>Contact  : 8825476782</li>
           <li>Degree  : B.TECH-CSBS</li>
           <li>YOP   : 2024</li>
          

          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;



    

  

