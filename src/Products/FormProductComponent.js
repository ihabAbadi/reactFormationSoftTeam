import React, { PureComponent } from 'react'

export class FormProductComponent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                title: '',
                price:  0
            },
            edit : false
        }
    }

    //Cycle de vie de notre component
    componentDidMount() {
        //Après le premier rendu
        //console.log(this.props.editProduct)
    }

    componentDidUpdate() {
        //console.log(this.props.editProduct)
    }

    changeField = (e) => {
        const tmpProduct =  this.props.editProduct != undefined &&  this.state.edit != true ? {...this.props.editProduct} : {...this.state.product}
        tmpProduct[e.target.name] = e.target.value
        this.setState({
            product : {...tmpProduct},
            edit : true
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
            },
            edit : false
        })
    }

    
    render() {
        const {editProduct} = this.props
        const title = editProduct != undefined &&  this.state.edit != true ? editProduct.title : this.state.product.title
        const price = editProduct != undefined &&  this.state.edit != true ? editProduct.price : this.state.product.price
        return (
            <div className="row m-1">
                <input type="text" name="title" value={title} onChange={this.changeField} placeholder="Titre produit" className="form-control col-5 p-1" />
                <input type="number" name="price" value={price} onChange={this.changeField} placeholder="Prix produit" className="form-control col-5 p-1" />
                <button className="btn btn-primary p-1 col-2" onClick={this.validProduct}>Ajouter</button>
            </div>
        )
    }
}