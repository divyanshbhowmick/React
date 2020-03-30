import React from 'react';
import './sellerCard.css';
import { Link } from 'react-router-dom';

const SellerCard = ({ id, name, contact, address }) => {
    return (
        <Link to={"sellers/" + id}>
            <div className="seller-card">
                <div className="seller-name">
                    {name}
                </div>

                <div className="seller-id">
                    {id}
                </div>

                <div className="seller-description">
                    This is a dummy descripton for the seller. This talks about the offerings, address & ratings of the seller.
                    This is a dummy descripton for the seller. This talks about the offerings, address & ratings of the seller.
                    This is a dummy descripton for the seller. This talks about the offerings, address & ratings of the seller.
                </div>

                <div className="seller-address">
                    Mob: {contact}
                    <br />
                    Location: {address}
                </div>
            </div>
        </Link>
    )
}

export default SellerCard;