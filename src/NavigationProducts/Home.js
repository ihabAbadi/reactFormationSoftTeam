import React, { PureComponent } from 'react'
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import { FormProduct } from './FormProduct'
import Products from "./Products"
import {Product} from "./Product"
export class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <BrowserRouter>
                <nav className="container-fluid">
                    <ul className="row">
                        <li className="col"><Link to="/">Accueil</Link></li>
                        <li className="col"><Link to="/form">Formulaire</Link></li>
                    </ul>
                </nav>
        
                <Switch>
                    <Route path="/" exact component={Products}></Route>
                    <Route path="/form" exact component={FormProduct}></Route>                    
                    <Route path="/form/:id" component={FormProduct}></Route>
                    <Route path="/product/:id" component={Product}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}