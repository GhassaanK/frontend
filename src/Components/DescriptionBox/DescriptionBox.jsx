import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo at, veniam sunt eum aut sapiente ea perspiciatis, voluptas officiis vero ducimus facilis non error voluptatem numquam asperiores, quos cupiditate minima!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nostrum? Labore dolorum sapiente quae ipsam vero non reprehenderit mollitia laboriosam magnam fuga assumenda nostrum consectetur, temporibus saepe ab sequi exercitationem.</p>
        </div>
    </div>
  )
}
