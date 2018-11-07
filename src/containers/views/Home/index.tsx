import * as React from "react"
import { observer, inject } from "mobx-react"
import { Layout, Menu, Breadcrumb } from "antd"
import { ComponentExt } from "@utils/reactExt"
import CustomLink from "@components/base/CustomLink"
import { GlobalStore, RouterStore } from "@models/index"
const { Header, Content, Footer } = Layout
interface IStoreProps {
    globalStore: GlobalStore
    routerStore: RouterStore
}
@inject((store: IStoreProps) => {
    const { routerStore, globalStore } = store
    return { routerStore, globalStore }
})
@observer
class Home extends ComponentExt<IStoreProps> {
    componentDidMount() {
        const { globalStore, routerStore } = this.props
        console.log(globalStore, routerStore)
    }
    onLinkClick = () => {
        console.log(this.props)
    }
    render() {
        return (
            <Layout>
                <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        style={{ lineHeight: "64px" }}
                    >
                        <Menu.Item key="1">
                            <CustomLink to="/page">Page</CustomLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <CustomLink to="/test">test</CustomLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <CustomLink to="/counter">counter</CustomLink>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ marginTop: 64, height: "100%" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            background: "#fff",
                            padding: 24,
                            minHeight: 380
                        }}
                    >
                        Content
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    ©2018 Created by Xiao Liu
                </Footer>
            </Layout>
        )
    }
}

export default Home
