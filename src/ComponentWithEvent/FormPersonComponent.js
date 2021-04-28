import React, { PureComponent } from 'react'

export class FormPersonComponent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            person : ''
        }
    }

    addPerson = () => {
        this.props.addPerson(this.state.person)
    }
    render() {
        return(
            <div>
                <input type="text" onChange={(e) => this.setState({ person: e.target.value })} /> <button onClick={this.addPerson}>Ajouter</button>
            </div>
        )
    }
}