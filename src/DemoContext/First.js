import React, { PureComponent } from 'react'
import { GlobalContext } from './GlobalContext';
import {TraductionContext} from "./TraductionContext"
export class First extends PureComponent {
    
    static contextType = GlobalContext

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        console.log(this.context)
        return ( 

            <div>
               la langue est  {this.context.lang}
            </div>
         );
    }
}
 