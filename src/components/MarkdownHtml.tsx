import * as React from "react"
const MarkdownIt = require("markdown-it")
const md = new MarkdownIt()
interface PropsList {
    mdhtml: any
    [key: string]: any
}
const MarkdownHtml = (props: PropsList) => {
    return <div dangerouslySetInnerHTML={{ __html: md.render(props.mdhtml) }} />
}

export default MarkdownHtml
