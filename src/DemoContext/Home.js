import React, { PureComponent } from 'react'
import { First } from './First';
import {TraductionContext} from "./TraductionContext"


export class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            lang : 'fr'
         }
    }

    changeLang = (e) => {
        this.setState({ lang: e });
    }
    render() { 
        return ( 
        <div>
            <h1>Home</h1>
            <TraductionContext.Provider value={this.state.lang}>
                <Menu changeLang={this.changeLang}></Menu>
                <First></First>
            </TraductionContext.Provider>
        </div> 
        );
    }
}

const Menu = (props) => {
    const onChange = (e) => {
        props.changeLang(e.target.value)
    }
    return(
        <div>
            <select onChange={onChange}><option>fr</option><option>en</option><option>ar</option></select>
        </div>
    )
}



