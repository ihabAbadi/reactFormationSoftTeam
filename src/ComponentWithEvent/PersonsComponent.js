import React, { PureComponent } from 'react'

export class PersonsComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            persons: ['element 1',' element 2'],
            person: undefined
        }
    }

    addPerson = () => {
        if (this.state.person != undefined) {
            //operateur spread  => ...
            this.setState(
                {
                    persons: [ ...this.state.persons.slice(1)],
                    person: undefined
                });
        }
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.setState({ person: e.target.value })} /> <button onClick={this.addPerson}>Ajouter</button>
                {this.state.persons.map((element, index) => (
                    <div>{element}</div>
                ))}
            </div>
        );
    }
}

