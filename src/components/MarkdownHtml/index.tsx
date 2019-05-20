import * as React from "react"
import "highlight.js/styles/atom-one-light.css"
import * as style from "./index.scss"
const hljs = require("highlight.js")
const MarkdownIt = require("markdown-it")
const md = new MarkdownIt({
    highlight: function(str: string, lang: any) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return (
                    '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    "</code></pre>"
                )
            } catch (__) {}
        }

        return (
            '<pre class="hljs"><code>' +
            md.utils.escapeHtml(str) +
            "</code></pre>"
        )
    }
})
console.log(md, "md")
interface PropsList {
    mdhtml: any
    [key: string]: any
}
const MarkdownHtml = (props: PropsList) => {
    return (
        <div
            className={style.mdStyle}
            dangerouslySetInnerHTML={{ __html: md.render(props.mdhtml) }}
        />
    )
}

export default MarkdownHtml
