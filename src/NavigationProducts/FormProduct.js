import React, { PureComponent } from 'react'
import { addProduct } from '../Services/ProductService'

export class FormProduct extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                title: '',
                price:  0
            },
        }
    }

    
    changeField = (e) => {
        const tmpProduct =   {...this.state.product}
        tmpProduct[e.target.name] = e.target.value
        this.setState({
            product : {...tmpProduct},
        })
    }

    validProduct = () => {
        addProduct(this.state.product)
        this.props.history.push("/")
    }

    
    render() {
        const title = this.state.product.title
        const price =  this.state.product.price
        return (
            <div className="row m-1">
                <input type="text" name="title" value={title} onChange={this.changeField} placeholder="Titre produit" className="form-control col-5 p-1" />
                <input type="number" name="price" value={price} onChange={this.changeField} placeholder="Prix produit" className="form-control col-5 p-1" />
                <button className="btn btn-primary p-1 col-2" onClick={this.validProduct}>Ajouter</button>
            </div>
        )
    }
}