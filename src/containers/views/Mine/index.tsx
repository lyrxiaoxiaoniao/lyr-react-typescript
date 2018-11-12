import * as React from "react"
import { ComponentExt } from "@utils/reactExt"

export interface Props {}
class Mine extends ComponentExt<Props> {
    render() {
        return (
            <div>
                <span>Mine</span>
            </div>
        )
    }
}

export default Mine
