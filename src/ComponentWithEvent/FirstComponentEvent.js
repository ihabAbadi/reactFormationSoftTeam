import React, { PureComponent } from 'react'

export class FirstComponentEvent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            compteur : 0,
            textValue : ''
        }
    }
    clickButton = (event) => {
        //alert("hello from click button "+ event.target.innerText)
        //modification du compteur du state
        this.setState({ compteur: this.state.compteur + 1 });
    }
    render() {
        return (
            <div>
                <h1>Component with Event</h1>
                <div><input type="text" onChange={(e) => this.setState({ textValue:  e.target.value})} placeholder="merci de saisir une valeur" /></div>
                <div>{this.state.textValue}</div>
                <SecondComponent compteur={this.state.compteur}></SecondComponent>
                <button onClick={this.clickButton} >click</button>
            </div>
        );
    }
}

const SecondComponent = (props) => {
    return(
        <div>{props.compteur}</div>
    )
}
