import React from 'react';
import PropTypes from 'prop-types';
import { ProductItem } from '.';

const ProductsContainer = ({ products, addItemToCartHandler, search }) => {

    const getFilteredProducts = (products, search) => {
        let href = window.location.href.split("/")
        let sellerId = href[href.length - 1]
        products = Object.assign({}, ...products[sellerId]);
        let filteredProducts = (
            Object.keys(products).map((key) => {
                if (products[key].name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                    let data = {};
                    data[key] = products[key];
                    return data;
                }
                return null;
            })
        )
        filteredProducts = Object.assign({}, ...filteredProducts);
        return { filteredProducts, sellerId }
    }

    const { filteredProducts, sellerId } = getFilteredProducts(products, search);

    return (
        <>
            {
                Object.keys(filteredProducts).map((keys) => {
                    const element = filteredProducts[keys]
                    return (
                        <ProductItem
                            key={keys}
                            uniqueKey={keys}
                            element={element}
                            sellerId={sellerId}
                            addItemToCartHandler={addItemToCartHandler}
                        />
                    )
                })
            }
        </>
    );
}

ProductsContainer.propTypes = {
    products : PropTypes.object,
    addItemToCartHandler : PropTypes.func,
    search : PropTypes.string
}

export default ProductsContainer;