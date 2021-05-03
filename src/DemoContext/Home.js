import React, { PureComponent } from 'react'
import { First } from './First';
import { GlobalContext } from './GlobalContext';
import {Second} from "./Second"
import { ThemeContext } from './ThemeContext';
import {themes, TraductionContext} from "./TraductionContext"


export class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            lang : 'fr',
            theme : themes.light
         }
    }

    changeLang = (e) => {
        this.setState({ lang: e });
    }
    changeTheme = (v) => {
        this.setState({ theme: themes[v] });
    }
    render() { 
        return ( 
        <div style={{...this.state.theme}}>
            <h1>Home</h1>
            {/* <TraductionContext.Provider value={this.state.lang}>
                <Menu changeLang={this.changeLang}></Menu>
                <First></First>
            </TraductionContext.Provider> */}
            {/* <ThemeContext.Provider value={this.state.theme}>
                <MenuTheme changeTheme={this.changeTheme}></MenuTheme>
                <Second></Second>
            </ThemeContext.Provider> */}
            <GlobalContext.Provider value={this.state}>
                <Menu changeLang={this.changeLang}></Menu>
                <MenuTheme changeTheme={this.changeTheme}></MenuTheme>
                <First></First>
                <Second></Second>
            </GlobalContext.Provider>
        </div> 
        );
    }
}

const Menu = (props) => {
    const onChange = (e) => {
        props.changeLang(e.target.value)
    }
    return(
        <div>
            <select onChange={onChange}><option>fr</option><option>en</option><option>ar</option></select>
        </div>
    )
}


const MenuTheme = (props) => {
    const onChange = (e) => {
        props.changeTheme(e.target.value)
    }
    return(
        <div>
            <select onChange={onChange}><option>dark</option><option>light</option></select>
        </div>
    )
}



