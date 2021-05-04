import React, { PureComponent } from 'react'


// const HOCComponent = (Component) => {
//     return(
//         <Component></Component>
//     )
// }



export const HocComponent = (Component, spec) => {
    class HOC extends PureComponent {
        render() {
            return (
            <div>
                <h1>{spec}</h1>
            <Component></Component>
            </div>
            )
        }
    }

    return HOC
}