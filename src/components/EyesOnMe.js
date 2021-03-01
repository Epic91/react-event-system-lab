import React from 'react'

class EyesOnMe extends React.Component {

    focusHandler = () => {
        console.log('Good!')
    }

    blurHandler = () => {
        console.log('Hey! Eyes on Me!')
    }

    render () {
        return (
            <button onFocus={this.focusHandler} onBlur={this.blurHandler}>
                Click on Me
            </button>

        )
    }
}

export default EyesOnMe
