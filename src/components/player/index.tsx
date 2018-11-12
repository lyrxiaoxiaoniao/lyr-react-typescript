import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import $ from "jquery"

class Player extends ComponentExt {
    componentDidMount() {
        console.log($("#audio"), 123123)
    }
    render() {
        return (
            <div>
                <audio id="audio" controls autoPlay>
                    <source src={require("file-loader!../../assets/xj.mp3")} />
                    Your browser does not support the audio element.
                </audio>
            </div>
        )
    }
}

export default Player
