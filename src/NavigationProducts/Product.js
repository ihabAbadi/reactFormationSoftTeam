import React, { PureComponent } from 'react'
import { deleteProduct, getProductById } from '../Services/ProductService';

export class Product extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: undefined,
                title: undefined,
                price: undefined
            }
        }
    }

    componentDidMount() {
        const product = getProductById(this.props.match.params.id)
        if(product != undefined) {
            this.setState({ product:{...product} });
        }
    }

    deleteProduct = () => {
        //appeler une méthode de notre service pour supprimer le produit
        deleteProduct(this.state.product.id)
        this.props.history.push("/")
    }

    edit = () => {
        //renvoie vers le formulaire
    }

    addToCart = () => {
        //Renvoie vers le panier
    }

    render() {
        const { product } = this.state
        return (
            <div>
                {this.state.product.id != undefined
                    ?
                    (<div className="col-3 p-2">
                        <div className="row justify-content-center">
                            <div className="col">{product.title}</div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col">{product.price}</div>
                        </div>
                        <div className="row">
                            <button className="btn btn-danger col" onClick={this.deleteProduct}>supprimer</button>
                            <button className="btn btn-primary col" onClick={() => this.props.edit(product)}>modifier</button>
                            <button className="btn btn-secondary col" onClick={() => this.props.addToCart(product.id)}>Ajouter panier</button>

                        </div>
                    </div>) : (<h1>Aucun produit avec cet id</h1>)}
            </div>


        );
    }
}

