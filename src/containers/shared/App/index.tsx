import * as React from "react"
import { hot } from "react-hot-loader"
import RouterMap from "@router/index"
import * as style from "./index.scss"
@hot(module)
class App extends React.Component {
    render() {
        return (
            <div className={style.appContainer}>
                <RouterMap />
            </div>
        )
    }
}

export default App
