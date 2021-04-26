import React from "react"
import { PersonComponent } from "./PersonComponent"

export class FirstComponent extends React.PureComponent {

    render() {
        return(
            <div>
                <h1>Hello from our First component</h1>
                <PersonComponent firstName ="ihab" lastName="abadi"></PersonComponent>
                <PersonComponent firstName ="tata" lastName="toto"></PersonComponent>
            </div>            
        )
    }
}

