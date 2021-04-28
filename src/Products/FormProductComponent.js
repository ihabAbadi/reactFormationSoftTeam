import React, { PureComponent } from 'react'

export class FormProductComponent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                title: '',
                price: 0
            }
        }
    }

    changeField = (e) => {
        const tmpProduct = {...this.state.product}
        tmpProduct[e.target.name] = e.target.value
        this.setState({
            product : {...tmpProduct}
        })
    }

    addProduct = () => {
        this.props.addProduct(this.state.product)
        this.setState({
            product : {
                title: '',
                price: 0
            }
        })
    }

    
    render() {
        return (
            <div className="row m-1">
                <input type="text" name="title" value={this.state.product.title} onChange={this.changeField} placeholder="Titre produit" className="form-control col-5 p-1" />
                <input type="number" name="price" onChange={this.changeField} value={this.state.product.price} placeholder="Prix produit" className="form-control col-5 p-1" />
                <button className="btn btn-primary p-1 col-2" onClick={this.addProduct}>Ajouter</button>
            </div>
        )
    }
}