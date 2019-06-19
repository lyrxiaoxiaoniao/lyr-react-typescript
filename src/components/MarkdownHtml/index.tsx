import * as React from "react"
import "highlight.js/styles/atom-one-light.css"
import * as style from "./index.scss"
import './toc.css'
import markdownitAnchor from "markdown-it-anchor"
import markdownitTocDoneRight from "markdown-it-toc-done-right"
const hljs = require("highlight.js")
const MarkdownIt = require("markdown-it")
const md = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
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
    .use(markdownitAnchor, {
        permalink: true,
        permalinkBefore: true,
        permalinkSymbol: "§"
    })
    .use(markdownitTocDoneRight)
interface PropsList {
    mdhtml: any
    [key: string]: any
}
const MarkdownHtml = (props: PropsList) => {
    return (
        <div
            className={style.mdStyle}
            dangerouslySetInnerHTML={{
                __html: md.render(props.mdhtml)
            }}
        />
    )
}

export default MarkdownHtml
