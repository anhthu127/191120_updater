import React from 'react'
import { Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'

function Screen1(props) {
    const goTo2 = () => {
        console.log(JSON.stringify(props));
        props.history.push('/screen2')
    }
    return (
        <div>
            <p> this is Screen111111111</p>
            <p>auto updating</p>
            <Button onClick={() => goTo2()}>Screen2</Button>

        </div>
    )
}

export default withRouter(Screen1)