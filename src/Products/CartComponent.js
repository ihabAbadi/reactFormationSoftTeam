import React, { PureComponent } from 'react'


export class CartComponent extends PureComponent {
    constructor(props) {
        super(props)
    }
    total = () => {
        let total = 0
        this.props.panier.forEach(element => {
            total += element.price * element.qty
        });
        return total
    }
    render() {
        const { panier } = this.props
        console.log(panier)
        return (
            <div className="container">
                <h1>Nombre Produit : {panier != undefined ? panier.length : 0}</h1>
                {panier.map((element, index) => 
                    <CartProductComponent product={element} key={index}></CartProductComponent>
                )}
                <div className="row">
                    <div className="col">Total : {this.total()}</div>
                </div>
            </div>
        )
    }
}

const CartProductComponent = (props) => {
    return(
        <div className="row">
            <div className="col">
                {props.product.title}
            </div>
            <div className="col">
                {props.product.price}
            </div>
            <div className="col">
                {props.product.qty}
            </div>
            <div className="col">
                {props.product.price * props.product.qty}
            </div>
        </div>
    )
}