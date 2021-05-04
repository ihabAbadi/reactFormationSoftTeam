import React, { PureComponent } from 'react';
import { WithSearch } from './WithSearch';

const personnes = [
    "toto",
    "tata",
    "titi"
]
const search = (search) => {
    if(search == undefined || search == "")
        return personnes
    else {
        const searchPersonnes =  [...personnes.filter(p =>p.indexOf(search) >= 0)]
      
        return searchPersonnes
    }    
}
class ListUserComponent extends PureComponent {
    render() {
        return(
            <div>
                <h1>Liste personnes</h1>
                {this.props.data.map((element,index) => (<div>{element}</div>))}
            </div>
        )
    }
}

export default WithSearch(ListUserComponent, search)