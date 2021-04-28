import React, { PureComponent } from 'react'
import { FormProductComponent } from './FormProductComponent';
import { ProductComponent } from './ProductComponent';

export class ProductsComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            products : []
         }
    }

   

    addProduct = (product) => {
        this.setState(
            {
                products : [...this.state.products, {...product}],
            }
        )
    }

    deleteProduct = (title) => {
        this.setState({ products: [...this.state.products.filter(p => p.title != title)] });
    }

    render() { 
        return ( 
            <div className="container">
                <FormProductComponent addProduct={this.addProduct}></FormProductComponent>
                <div className="row ">
                    {this.state.products.map((element, index) => {
                        return (
                            <ProductComponent deleteProduct={this.deleteProduct} key={index} product={element}></ProductComponent>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 