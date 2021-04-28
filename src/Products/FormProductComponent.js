import React, { PureComponent } from 'react'

export class FormProductComponent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                title: '',
                price:  0
            }
        }
    }

    //Cycle de vie de notre component
    componentDidMount() {
        //Après le premier rendu
        console.log(this.props.editProduct)
    }

    componentDidUpdate() {
        console.log(this.props.editProduct)
    }

    changeField = (e) => {
        const tmpProduct = {...this.state.product}
        tmpProduct[e.target.name] = e.target.value
        this.setState({
            product : {...tmpProduct}
        })
    }

    validProduct = () => {
        if(this.props.editProduct == undefined) {
            this.props.addProduct(this.state.product)            
        }
        else {
            this.props.confirmEdit(this.props.editProduct.id, this.state.product)
        }
        this.setState({
            product : {
                title: '',
                price: 0
            }
        })
    }

    
    render() {
        const {editProduct} = this.props
        return (
            <div className="row m-1">
                {/* <input type="text" name="title" value={editProduct != undefined ? this.state.product.title : ''} onChange={this.changeField} placeholder="Titre produit" className="form-control col-5 p-1" /> */}
                <input type="text" name="title" value={editProduct != undefined ? editProduct.title : ''} onChange={this.changeField} placeholder="Titre produit" className="form-control col-5 p-1" />
                {/* <input type="number" name="price" onChange={this.changeField} value={editProduct != undefined ? this.state.product.price : 0} placeholder="Prix produit" className="form-control col-5 p-1" /> */}
                <input type="number" name="price" value={editProduct != undefined ? editProduct.price : 0} onChange={this.changeField} placeholder="Prix produit" className="form-control col-5 p-1" />
                <button className="btn btn-primary p-1 col-2" onClick={this.validProduct}>Ajouter</button>
            </div>
        )
    }
}