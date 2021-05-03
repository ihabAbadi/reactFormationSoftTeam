import React, { PureComponent } from 'react'

export class ProductComponent extends PureComponent  {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    goToDetail = () => {
        this.props.history.push("/product/"+this.props.product.id)
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
                    
                    <button className="btn btn-secondary col" onClick={this.goToDetail}>Detail</button>

                </div>
            </div>
         );
    }
}
 
