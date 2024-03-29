import React from 'react'

// this is a functional component 
// its the way I would prefer you guys to write your component
function Welcome(props) {



    const name = "Garfield"
    const element = <h2>This is JSX, here's a variable value: {name}</h2>

    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <h2>Hope you're having a great time!</h2>
            {element}
        </div>
    )
}

// this is a class based component 
// it is a bit more verbose but the benefit is it handles state a bit better
// in some people's opinion 
class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>
    }
}

export default Welcome 