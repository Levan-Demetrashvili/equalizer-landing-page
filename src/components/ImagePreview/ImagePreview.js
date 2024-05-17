import React from "react";
import "./imagePreview.css";

export default function ImagePreview() {
  return (
    <div className='image-container'>
      <img className='equilibrium' src='./assets/images/image-equilibrium.jpg' alt='equilibrium' />
      <img className='preview' src='./assets/icons/icon-view.svg' alt='view icon' />
    </div>
  );
}
