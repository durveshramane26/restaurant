import React from 'react'
import "./style.css";
const Restaurant = () => {
  return (
    <>
      <div className="card-container">
        <div className='card'>
            <div className="card-body">
                <span className='card-number card-cricle subtle' >1</span>
                <span className='card-author subtle'>Breakfast</span>
                <h2 className='card-title'> Maggie </h2>
                <span className="card-description subtle"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error non sunt provident accusamus cum iste? Esse, consectetur aperiam eos praesentium dolore quia minima ut, sit fugit dolor laborum quaerat. 
                 </span>
                 <div className="card-read">Read</div>
            </div>
            <img src={image} alt="images" className="card-media" />

            <span className='card-tag subtle'>Order Now</span>
        </div>
      </div>
    </>
  )
}

export default Restaurant