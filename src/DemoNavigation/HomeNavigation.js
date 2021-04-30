import React, { PureComponent } from 'react'
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import { Page1, Page2, Page3 } from './Pages'

export class HomeNavigation extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            routes : [
                {
                    path : 'page1',
                    component : <Page1/>
                },
                {
                    path : 'page2',
                    component : <Page2/>
                },
            ]
        }
    }

    render(){
        return(
            <BrowserRouter>
                <nav>
                    <li>
                        <Link to="/page1">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Page 2</Link>
                    </li>
                    <li>
                        <Link to="/page3/12">Page 3</Link>
                    </li>
                </nav>
                {/* ici chargement des page */}
                <Switch>
                    <Route path="/page1">
                        <Page1></Page1>
                    </Route>
                    <Route path="/page2">
                        <Page2></Page2>
                    </Route>
                    <Route path="/page3/:id" component={Page3}>
                        
                    </Route>
                    {/* {this.state.routes.map((element,index) => (
                        <Route key={index} path={element.path} > {element.component}</Route>
                    ))} */}
                </Switch>
            </BrowserRouter>
        )
    }
}