import React from 'react'
import './BreadCrumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export const BreadCrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumbs'>
        HOME <img src={arrow_icon} alt="Some alt text" /> SHOP <img src={arrow_icon} alt="Some alt text" /> {product.category} <img src={arrow_icon} alt="Some alt text" /> {product.name}
    </div>
  ) 
}