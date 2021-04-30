import React, { PureComponent } from "react"
import {Link,Switch, Route} from "react-router-dom"
export const Page1 = (props) => {
console.log(props)
return (
<div>
    
    <h1>Page 1</h1>
    <nav>
        <Link to="/page1/page11">page 1 1</Link>
        <Link to="/page1/page12">page 1 2 </Link>
    </nav>
    <Switch>
        <Route path="/page1/page11" component={() => (<div><h1>sous page 1 1</h1></div>)}></Route>
        <Route path="/page1/page12" component={() => (<div><h1>sous page 1 2</h1></div>)}></Route>
    </Switch>    
</div>
)}
export const Page2 = () => (<div><h1>Page 2</h1></div>)


export class Page3 extends PureComponent {
    constructor(props) {
        super(props)
        console.log(props)
    }


    goAfter3Second = () => {
        //la navigation se fait à l'aide de la propriété history des props
        setTimeout(() => {
            this.props.history.push("/page1")
        },3000)
    }
    render() {
        
        return(
            <div>
                <h1>Page 3 avec id {this.props.match.params.id}</h1>
                {/* {...this.props} => pour passer la totalité des props de page3 au buttonNavigation */}
                <ButtonNavigation {...this.props}></ButtonNavigation>
            </div>
        )
    }
}

class ButtonNavigation extends PureComponent {
    constructor(props) {
        super(props)
    }    


    goAfter3Second = () => {
        //la navigation se fait à l'aide de la propriété history des props
        setTimeout(() => {
            this.props.history.push("/page1")
        },3000)
    }
    render() {
        return(
            <button onClick={this.goAfter3Second}>Go to page 1 after 3 seconds</button>
        )
    }
}