import * as React from "react"
import { ComponentExt } from "@utils/reactExt"

export interface Props {}
class Router extends ComponentExt<Props> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div>
                <span>Router</span>
            </div>
        )
    }
}

export default Router
