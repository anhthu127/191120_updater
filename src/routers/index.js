import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Screen1 from '../screens/screen1'
import Screen2 from '../screens/screen2'
 
function RootRouter() {
    return (
        <div>
            <BrowserRouter>

                <Switch >
                    <Route exact path={"/"} component={Screen1} />
                    <Route exact path={'/screen2'} component={Screen2} />
                    {/* <Route exact path={'/test'} component={testUpdater} /> */}
                </Switch>

            </BrowserRouter>
        </div>
    )

}

export default RootRouter