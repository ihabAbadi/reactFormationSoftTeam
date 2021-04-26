import React from "react"
import { PersonComponent } from "./PersonComponent"

export class FirstComponent extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            persons : [
                {firstName : 'toto', lastName : 'tata'},
                {firstName : 'minet', lastName : 'titi'},
            ]
        }
    }
    render() {
        return(
            <div>
                <h1>Hello from our First component</h1>
                {/* <PersonComponent person={{firstName : 'ihab', lastName : 'abadi'}} firstName ="ihab" lastName="abadi"></PersonComponent>
                <PersonComponent firstName ="tata" lastName="toto"></PersonComponent> */}
                {this.state.persons.map((element,index) => {
                    return(
                        <PersonComponent person={element}></PersonComponent>
                    )
                })}
            </div>            
        )
    }
}

