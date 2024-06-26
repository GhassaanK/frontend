import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
export const ProductDisplay = (props) => {

    const {product} = props;

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="Some alt text" />
                <img src={product.image} alt="Some alt text" />
                <img src={product.image} alt="Some alt text" />
                {/* <img src={product.image} alt="" /> */}
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="Some alt text" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="Some alt text" />
                <img src={star_icon} alt="Some alt text" />
                <img src={star_icon} alt="Some alt text" />
                <img src={star_icon} alt="Some alt text" />
                <img src={star_dull_icon} alt="Some alt text" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum delectus provident totam quasi libero, vel dicta odio ad sunt eos laboriosam tempore saepe illum aspernatur fugiat, dolores nobis cupiditate obcaecati.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className="">S</div>
                    <div className="">M</div>
                    <div className="">L</div>
                    <div className="">XL</div>
                    <div className="">XXL</div>
                </div>

            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}
