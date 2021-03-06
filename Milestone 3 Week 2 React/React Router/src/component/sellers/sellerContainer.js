import React, { Component } from 'react';
import { Seller } from './';
import { productList } from '../../utils';
import { Redirect } from 'react-router-dom';

class SellerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartProducts: {},
            products: productList,
            totalCartValue: 0,
            search: '',
        }
    }

    addItemToCartHandler = (e) => {
        let id = e.currentTarget.id
        let sellerId = e.currentTarget.value
        const { cartProducts, products } = this.getUpdatedDetails(id, "add", sellerId)
        const amount = this.totalCartValue(cartProducts)
        this.setState({
            cartProducts: cartProducts,
            products: products,
            totalCartValue: amount
        })
    }

    removeItemFromCart = (e) => {
        let id = e.currentTarget.id
        let sellerId = e.currentTarget.value
        const { cartProducts, products } = this.getUpdatedDetails(id, "remove", sellerId)
        const amount = this.totalCartValue(cartProducts)
        this.setState({
            cartProducts: cartProducts,
            products: products,
            totalCartValue: amount
        })
    }

    totalCartValue = (cartProducts) => {
        let amount = 0
        Object.keys(cartProducts).map(function (key) {
            amount = amount + cartProducts[key].count * cartProducts[key].price
            return 0
        })
        return amount
    }

    getUpdatedDetails = (id, option, sellerId) => {
        if (option === "add") {
            let { products, cartProducts } = this.state;
            let sproducts = products
            products = Object.assign({}, ...sproducts[sellerId])
            let itemToAdd = { ...products[id] }
            itemToAdd.stock = itemToAdd.stock - 1
            itemToAdd.count = itemToAdd.count + 1
            itemToAdd["seller"] = sellerId
            if (itemToAdd.stock === -1) {
                itemToAdd = null
                alert("No Stock")
                products = sproducts
                return { cartProducts, products }
            }
            else {
                products[id] = { ...itemToAdd }
            }
            if (cartProducts[id]) {
                itemToAdd.count = cartProducts[id].count + 1
            }
            cartProducts[id] = itemToAdd
            let convertedToArray = []
            Object.keys(products).map((key) => {
                convertedToArray.push({ [key]: products[key] })
                return null
            })
            sproducts[sellerId] = convertedToArray
            products = sproducts
            return { cartProducts, products }
        }

        else {
            let { cartProducts, products } = this.state
            let sproducts = products
            products = Object.assign({}, ...sproducts[sellerId])
            let itemToUpdateProduct = { ...products[id] }
            itemToUpdateProduct.stock = itemToUpdateProduct.stock + 1

            if (cartProducts[id].count === 1) {
                itemToUpdateProduct.count = 0
                delete cartProducts[id]
            }
            else {
                cartProducts[id].count = cartProducts[id].count - 1
                itemToUpdateProduct.count = itemToUpdateProduct.count - 1
            }
            products[id] = itemToUpdateProduct
            let convertedToArray = []
            Object.keys(products).map((key) => {
                convertedToArray.push({ [key]: products[key] })
                return null
            })
            sproducts[sellerId] = convertedToArray
            products = sproducts
            return { cartProducts, products }
        }
    }

    updateSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        const sessionUser = sessionStorage.getItem("id")
        const sessionPassword = sessionStorage.getItem("pass")

        if (sessionUser == null || sessionPassword == null) {
            return <Redirect to="/login" />
        }

        let { search, products, totalCartValue, cartProducts } = this.state
        return (
            <>
                <Seller
                    search={search}
                    updateSearch={this.updateSearch}
                    products={products}
                    addItemToCartHandler={this.addItemToCartHandler}
                    totalCartValue={totalCartValue}
                    cartProducts={cartProducts}
                    removeItemFromCart={this.removeItemFromCart}
                />
            </>
        );
    }
}

export default SellerContainer;