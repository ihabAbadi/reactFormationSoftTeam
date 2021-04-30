import React, { PureComponent } from 'react'

export class ProductComponent extends PureComponent  {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    goToForm = () => {
        this.props.history.push("/form/"+this.props.id)
    }
    goToCart = () => {
        this.props.history.push("/cart/"+this.props.id)
    }

    render() { 
        const {product} = this.props
        return ( 
            <div className="col-3 p-2">
                <div className="row justify-content-center">
                    <div className="col">{product.title}</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">{product.price}</div>
                </div>
                <div className="row">
                    <button className="btn btn-danger col" onClick={() => this.props.deleteProduct(product.id)}>supprimer</button>
                    <button className="btn btn-primary col" onClick={this.goToForm}>modifier</button>
                    <button className="btn btn-secondary col" onClick={this.goToCart}>Ajouter panier</button>

                </div>
            </div>
         );
    }
}
 
