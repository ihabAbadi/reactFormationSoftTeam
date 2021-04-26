import React, { PureComponent } from 'react'

export class PersonComponent extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <div>
                <div>Nom : {this.props.lastName}</div>
                <div>Prénom : {this.props.firstName}</div>
            </div>
        );
    }
}
 
