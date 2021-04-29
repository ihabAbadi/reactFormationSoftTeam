import React, { Component, PureComponent } from 'react'
import { mockApi } from '../Services/ProductService';
import { FormProductComponent } from './FormProductComponent';
import { ProductComponent } from './ProductComponent';

export class ProductsComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            products : [],
            nb : 0,
            editProduct : undefined,
            loading : true
         }
         console.log("construct component")
         
    }

    componentDidMount() {
        //Appeler des services rest au autre
        console.log("component mounted")
        mockApi.then((res) => {
            this.setState({ loading: false, products :[...res] });
        }).catch(err=> {});
        //On peut mettre à jour le state
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return this.props != nextProps || this.state != nextState
    // }

    componentDidUpdate() {
        //ne jamais mettre à jour le state ici !!!!!!!!
        console.log("component updated")
    }
   
    componentWillUnmount() {
        console.log("component wil unmount")
    }

    addProduct = (product) => {
        this.setState(
            {
                products : [...this.state.products, {...product, id : this.state.nb + 1}],
                nb : this.state.nb + 1
            }
        )
    }

    deleteProduct = (id) => {
        this.setState({ products: [...this.state.products.filter(p => p.id != id)] });
    }

    edit = (product) => {
        this.setState({ editProduct: product });
    }
    confirmEdit = (id, newProduct) => {
       
        //console.log(newProduct)
        // const tmpProducts = [...this.state.products]
        // for(let product of tmpProducts) {
        //     if(product.id == id) {
        //         product.title = newProduct.title
        //         product.price = newProduct.price
        //         break
        //     }
        // }
        const tmpProducts = []
        for(let p of this.state.products) {
            if(p.id == id) {
                p.title = newProduct.title
                p.price = newProduct.price
            }
            tmpProducts.push({...p})
        }
        //Mise à jour state
        this.setState({ products: tmpProducts, editProduct : undefined });
    }
    render() { 
        //ne jamais mettre à jour le state ici !!!!!!!!
        return ( 
            <div className="container">
                <FormProductComponent confirmEdit={this.confirmEdit} editProduct={this.state.editProduct} addProduct={this.addProduct}></FormProductComponent>
                {this.state.loading ? 
                
                (<div>En cours... </div>) 
                
                :
                
                (<div className="row ">
                    {this.state.products.map((element, index) => {
                        return (
                            <ProductComponent edit={this.edit} deleteProduct={this.deleteProduct} key={index} product={element}></ProductComponent>
                        )
                    })}
                </div>)}
            </div>
         );
    }
}
 