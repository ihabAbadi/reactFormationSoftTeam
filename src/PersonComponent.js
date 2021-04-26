import React, { PureComponent } from 'react'

export class PersonComponent extends PureComponent {
    constructor(props) {
        super(props);

    }
    render() { 
        //destructeur
        const {firstName, lastName, person} = this.props
        return (  
            <div>
                <div>Nom : {lastName} {"<=>"} {person != undefined ? person.lastName : null}</div>
                <div>Prénom : {firstName} {"<=>"} {person != undefined ? person.firstName : null}</div>
            </div>
        );
    }
}


// export const PersonComponent = (props) => {

//     const { firstName, lastName, person } = props

//     return (
//         <div>
//             <div>Nom : {lastName} {"<=>"} {person != undefined ? person.lastName : null}</div>
//             <div>Prénom : {firstName} {"<=>"} {person != undefined ? person.firstName : null}</div>
//         </div>
//     )
// }

