import * as React from "react"
import { Layout, Menu } from "antd"
const { Header, Content, Footer } = Layout
import { observer, inject } from "mobx-react"
import * as style from "./index.scss"
import { withRouter } from "react-router-dom"
@inject("menuStore")
@(withRouter as any)
@observer
class Home extends React.Component<any, any> {
    componentDidMount() {
        console.log(this.props, 111111111111111111111)
    }
    componentWillMount() {
        const key = `/${this.props.location.pathname.split("/")[1]}`
        this.props.menuStore.SelectedKey[0] = key
    }
    onLinkClick = (str: string) => {
        this.props.history.push(str)
        this.props.menuStore.SelectedKey[0] = str
    }
    render() {
        return (
            <Layout className={style.layout}>
                <Header className={style.header}>
                    <div className={style.menuContainer}>
                        <img
                            onClick={this.onLinkClick.bind(this, "/")}
                            className={style.logo}
                            src={require("@assets/favicon.png")}
                            alt=""
                        />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["/"]}
                            selectedKeys={this.props.menuStore.SelectedKey}
                            className={style.menu}
                        >
                            <Menu.Item
                                key="/"
                                onClick={this.onLinkClick.bind(this, "/")}
                            >
                                首页
                            </Menu.Item>
                            <Menu.Item
                                key="/test"
                                onClick={this.onLinkClick.bind(this, "/test")}
                            >
                                文章
                            </Menu.Item>
                            <Menu.Item
                                key="/counter"
                                onClick={this.onLinkClick.bind(
                                    this,
                                    "/counter"
                                )}
                            >
                                mobx
                            </Menu.Item>
                            <Menu.Item
                                key="/mine"
                                onClick={this.onLinkClick.bind(
                                    this,
                                    "/mine"
                                )}
                            >
                                我的
                            </Menu.Item>
                        </Menu>
                    </div>
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
