import React, { PureComponent } from 'react'
import {TraductionContext} from "./TraductionContext"
export class First extends PureComponent {
    
    static contextType = TraductionContext

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        console.log(this.context)
        return ( 

            <div>
               la langue est  {this.context}
            </div>
         );
    }
}
 