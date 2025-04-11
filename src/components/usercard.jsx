

import React from 'react';
import './usercard.css'; 

const Usercard = () => {
  
  const profilePhoto = 'https://imgix.ranker.com/list_img_v2/8131/3168131/original/3168131?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720'; 
  const name = 'Eren yeager';
  const email = 'erenyeager@gmail.com';
  const phone = '+9114013988';
  const address = 'Town in Shiganshina';

  return (
    <div className="user-card">
      <div className="profile-section">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <h2 className="user-name">{name}</h2>
      </div>
      <div className="details-section">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
};

export default Usercard;