
import React from 'react';
import './Avatar.css'; 
const Avatar = ({ imageUrl, altText }) => {
  return (
    <div className="avatar-container">
      <img className="avatar-image" src={imageUrl}  />
      <br/>
      <i><b><p className="avatar-text"> {altText}</p></b></i>
    </div>
  );
};

export default Avatar;
