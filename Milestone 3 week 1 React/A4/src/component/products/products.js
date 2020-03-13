import React, { Component } from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap'

function Products(props) {
    
    const clickHandler = (key) => {
        props.click(key)
    }

    let items = null
    let fun = props.click
    let products = Object.assign({}, ...props.products);

    items = (
        Object.keys(products).map(function (key) {
            const element = products[key]
            return (
                <Card key={key} style={
                    {
                        minWidth: "190px",
                        maxWidth: "190px",
                        marginBottom: "20px",
                        boxShadow: "-2px 9px 10px -5px rgba(0,0,0,0.15)"
                    }}>
                    <Card.Img variant="top" src={element.img} style={
                        {
                            maxWidth: "auto",
                            maxHeight: "208px",
                            padding: "10px"
                        }}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png" }} />
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            Rs. {element.price + " "}
                            <br />
                            <font style={{ fontSize: "10px" }}>Remaining Stocks: {element.stock}</font>
                        </Card.Text>
                        <Button variant="dark" onClick={() => clickHandler(key)}>Add to Cart</Button>
                    </Card.Body>
                </Card>)
        })
    )
    return (
        <CardDeck style={
            {
                paddingLeft: "40px",
                paddingTop: "30px"
            }}>
            {items}
        </CardDeck>
    );
}

export default Products;