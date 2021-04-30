import React, { Component, PureComponent } from 'react'
import { mockApi } from '../Services/ProductService';
import { ProductComponent } from './ProductComponent';

export class Products extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            products : [],
            loading : true,
         }
   
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

    deleteProduct = (id) => {
        this.setState({ products: [...this.state.products.filter(p => p.id != id)] });
        //Il faut également supprimer le produit dans le service
    }

    render() { 
        //ne jamais mettre à jour le state ici !!!!!!!!
        return ( 
            <div className="container">
                {this.state.loading ? 
                
                (<div>En cours... </div>) 
                
                :
                
                (<div className="row ">
                    {this.state.products.map((element, index) => {
                        return (
                            <ProductComponent history={this.props} edit={this.edit} deleteProduct={this.deleteProduct} key={index} product={element}></ProductComponent>
                        )
                    })}
                </div>)}
            </div>
         );
    }
}
 