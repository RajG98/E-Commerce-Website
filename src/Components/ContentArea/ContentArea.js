import React from 'react';
import ProductCard from '../ProductCard/ProductCard.js';

import './ContentArea.css';

const ContentArea = () => {
    const productList = [
        {
            img:"/images/banner-dr-1.jpg"
        },
        {
            img:"/images/banner-dr-2.jpg"
        },
        {
            img:"/images/banner-dr-3.jpg"
        },
        {
            img:"/images/banner-dr-4.jpg"
        },
        {
            img:"/images/banner-dr-5.jpg"
        },
        {
            img:"/images/banner-dr-6.jpg"
        },
        {
            img:"/images/banner-dr-7.jpg"
        },
        {
            img:"/images/banner-dr-8.jpg"
        }
    ]
    return (
        <div className="content-area">
            <div className="main-banner">
                <img src="images/herobgv3.png" alt="" className="banner-img" />
            </div>
            <div className="products">
                {productList.map(({ img }) => (
                    <ProductCard src={img} />
                ))}
            </div>
            <div className="offer-banners">
                <div className="offer-banner">
                    <div className="banner-content banner1">
                        <h2>Trending & Hot</h2>
                        <p>Collection of most trending items</p>
                    </div>
                </div>
                <div className="offer-banner">
                    <div className="banner-content banner2">
                        <h2>But it for the first time</h2>
                        <p>New in store, try it before anyone else</p>
                    </div>
                </div>
            </div>
            <div className="main-banner">
                <img src="images/banner2-large.png" alt="" className="banner-img" />
            </div>
        </div>
    )
}
export default ContentArea;