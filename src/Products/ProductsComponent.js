import React, { PureComponent } from 'react'
import { ProductComponent } from './ProductComponent';

export class ProductsComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            product : {
                title : '',
                price : 0
            },
            products : []
         }
    }

    changeField = (e) => {
        const tmpProduct = {...this.state.product}
        tmpProduct[e.target.name] = e.target.value
        this.setState({ product: tmpProduct });
    }

    addProduct = () => {
        this.setState(
            {
                products : [...this.state.products, {...this.state.product}],
                product : {
                    title : '',
                    price : 0
                }
            }
        )
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row m-1">
                    <input type="text" name="title" onChange={this.changeField} placeholder="Titre produit" className="form-control col-5 p-1" />
                    <input type="number" name="price" onChange={this.changeField} placeholder="Prix produit" className="form-control col-5 p-1" />
                    <button className="btn btn-primary p-1 col-2" onClick={this.addProduct}>Ajouter</button>
                </div>
                <div className="row ">
                    {this.state.products.map((element, index) => {
                        return (
                            <ProductComponent key={index} product={element}></ProductComponent>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 