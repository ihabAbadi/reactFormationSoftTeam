import React, { PureComponent } from 'react'
import { FormPersonComponent } from './FormPersonComponent';

export class PersonsComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            persons: ['element 1', ' element 2'],
        }
    }

    addPerson = (p) => {
        this.setState(
            {
                persons: [...this.state.persons, p],
            });
    }
    render() {
        return (
            <div>
                <FormPersonComponent addPerson={this.addPerson}></FormPersonComponent>
                {this.state.persons.map((element, index) => (
                    <div>{element}</div>
                ))}
            </div>
        );
    }
}

