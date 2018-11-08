import * as React from "react"
import CustomLink from "@components/base/CustomLink"
import { Layout, Menu } from "antd"
const { Header, Content, Footer } = Layout
import { observer, inject } from "mobx-react"
import { RouterStore } from "@models/index"
import * as style from "./index.scss"

interface Iprops {
    routerStore: RouterStore
}
@inject("routerStore")
@observer
class Home extends React.Component<Iprops> {
    componentDidMount() {
        console.log(this.props.routerStore.location.pathname)
    }
    onLinkClick = (str: string) => {
        console.log(this.props.routerStore.location)
        console.log(str)
    }
    render() {
        return (
            <Layout className={style.layout}>
                <Header className={style.header}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        className={style.menu}
                    >
                        <Menu.Item
                            key="1"
                            onClick={this.onLinkClick.bind(this, "/")}
                        >
                            <CustomLink to="/">首页</CustomLink>
                        </Menu.Item>
                        <Menu.Item
                            key="2"
                            onClick={this.onLinkClick.bind(this, "/test")}
                        >
                            <CustomLink to="/test">scrollbar</CustomLink>
                        </Menu.Item>
                        <Menu.Item
                            key="3"
                            onClick={this.onLinkClick.bind(this, "/counter")}
                        >
                            <CustomLink to="/counter">counter</CustomLink>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content className={style.content}>
                    <div className={style.showarea}>{this.props.children}</div>
                </Content>
                <Footer className={style.footer}>
                    ©2018 Created by
                    <span className={style.text}> Xiao Liu </span>
                </Footer>
            </Layout>
        )
    }
}

export default Home
