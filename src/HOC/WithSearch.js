import React,{ PureComponent } from "react";


export const WithSearch = (ListComponent, searchMethod) => {
    class WithSearch extends PureComponent {
        constructor(props) {
            super(props)
            this.state = {
                searchValue : '',
                data : searchMethod(undefined)
            }
        }
        componentDidUpdate() {
            console.log(this.state)
        }
        changeSearchValue = (e) => {
            this.setState({ searchValue: e.target.value });
        }

        searchClick = () => {
            
            this.setState({ data: searchMethod(this.state.searchValue) });
        }

        render() {

            return(
                <div>
                    <input type="text" placeholder="Recherche" onChange={this.changeSearchValue} /><button onClick={this.searchClick}>Search</button>
                    <ListComponent data={this.state.data}></ListComponent>
                </div>
            )
        }
    }
    return WithSearch
}