import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
export interface Props {}
class Test extends ComponentExt<Props> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div>
                <span>Test页面</span>
            </div>
        )
    }
}

export default Test
