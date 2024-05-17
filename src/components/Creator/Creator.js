import React from "react";
import "./creator.css";

export default function Creator() {
  return (
    <div className='creator-container'>
      <img src='./assets/images/image-avatar.png' alt='creator' />
      <p className='text-sm'>
        Creation of<span className='author'>Jules Wyvern</span>
      </p>
    </div>
  );
}
