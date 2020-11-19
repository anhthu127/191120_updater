import React from 'react'
import { Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'

function Screen2(props) {

    const goTo1 = () => {
        props.history.push('/')
    }

    const goTest = () => {
        props.history.push('/test')
    }
    return (
        <div>
            this is Screen2222222222222

            <Button onClick={() => goTo1()}>Screen1</Button>
            {/* <Button onClick={() => goTest()}>Test</Button> */}
        </div>
    )
}

export default withRouter(Screen2)