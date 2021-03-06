import React from 'react';

import ProductTiles from './../product-tiles/productTiles';
import InformationTab from './../information-tab/informationTab';
import productImg from './../../../asset/ecommerce/002.jpg';
import ProductTags from './../product-tags/productTags';
import Modal from './../modal/modal';
import './productDetailsContainer.css';

const ProductDetailsContainer = (props) => {

    const aboutSeller = () => {
        document.getElementById('modal-view').style.display = "initial";
    }

    return (
        <div className="pdc">
            <Modal />
            <div className="pdc-heading">
                <font>PRODUCT DETAILS</font>
            </div>
            <div className="pdc-c1">
                <div className="pdc-c1-product-img">
                    <img src={productImg} alt={productImg} />
                </div>
                <ProductTiles />
            </div>
            <div className="pdc-c2">
                <div className="pdc-c2-tags">
                    <ProductTags textArr={["Chair", "Product", "Catalog", "With Background", "white"]} />
                </div>
                <div className="pdc-c2-product-name">
                    <font>Beautiful Chair for Kids</font>
                </div>
                <br></br>
                <div className="pdc-c2-price">
                    <font id="pdc-c2-price-offer">&#36;180.99</font>
                    <font id="pdc-c2-price-actual">&#36;280.99</font>
                </div>
                <hr />
                <div className="pdc-c2-product-description">
                    This is a demo description for the product Beautiful Chair for Kids. This section describes the product and explains its relevance. This section describes the product and explains its relevance. This is a demo description for the product.
                </div>
                <div className="pdc-c2-sizes">
                    Available Size<br /><br />
                    <div>S</div>
                    <div>M</div>
                    <div>XL</div>
                </div>
                <div className="pdc-c2-about-seller" >
                    <font onClick={aboutSeller}>About Seller</font>
                </div>
                <div className="pdc-c2-tabs-container">
                    <InformationTab />
                </div>
            </div >
        </div>
    );
}

export default ProductDetailsContainer;