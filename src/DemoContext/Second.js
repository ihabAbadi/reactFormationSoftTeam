import React, { PureComponent } from 'react'
import { GlobalContext } from './GlobalContext'
import { ThemeContext } from './ThemeContext'


export class Second extends PureComponent {
    
    static contextType = GlobalContext

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div style={{...this.context.theme}}>
                Lorem ipsum
            </div>
        )
    }
}