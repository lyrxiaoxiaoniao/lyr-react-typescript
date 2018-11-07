import * as React from "react"

function AsyncComponent(importComponent: any) {
    return class AsyncRouterComponent extends React.Component<any, any> {
        constructor(props: any) {
            super(props)
            this.state = { component: null }
        }

        async componentDidMount() {
            const { default: component } = await importComponent()
            this.setState({ component })
        }

        render() {
            const Com = this.state.component

            return Com ? <Com {...this.props} /> : null
        }
    }
}

export default AsyncComponent
