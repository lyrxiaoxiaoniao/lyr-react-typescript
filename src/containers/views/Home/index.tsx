import * as React from "react"
import { Layout, Menu, Icon, BackTop } from "antd"
const { Header, Content, Footer } = Layout
import { observer, inject } from "mobx-react"
import * as style from "./index.scss"
import { withRouter } from "react-router-dom"
import Player from "@components/Player"

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
                <div className={style.player}>
                    <Player />
                </div>
                <Header className={style.header}>
                    <div className={style.menuContainer}>
                        {/* <img
                            onClick={this.onLinkClick.bind(this, "/")}
                            className={style.logo}
                            src={require("@assets/favicon.png")}
                            alt=""
                        /> */}
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={["/"]}
                            selectedKeys={this.props.menuStore.SelectedKey}
                            className={style.menu}
                        >
                            <Menu.Item
                                key="/"
                                onClick={this.onLinkClick.bind(this, "/")}
                            >
                                 <Icon type="home" />首页
                            </Menu.Item>
                            <Menu.Item
                                key="/topic"
                                onClick={this.onLinkClick.bind(this, "/topic")}
                            >
                                 <Icon type="read" />文章
                            </Menu.Item>
                            <Menu.Item
                                key="/counter"
                                onClick={this.onLinkClick.bind(this,"/counter")}
                            >
                                 <Icon type="mail" />mobx
                            </Menu.Item>
                            <Menu.Item
                                key="/mine"
                                onClick={this.onLinkClick.bind(this, "/mine")}
                            >
                                 <Icon type="user" />我的
                            </Menu.Item>
                            <Menu.Item
                                key="/login"
                                onClick={this.onLinkClick.bind(this, "/login")}
                            >
                                 <Icon type="login" />登录
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>
                <Content className={style.content}>
                    <div className={style.left}>{this.props.children}</div>
                    <div className={style.user}>个人简介个人简介个人简介个人简介</div>
                </Content>
                {/* <Content className={style.content}>
                    {this.props.children}
                </Content> */}
                <BackTop style={{ bottom: '100px'}} />
                <Footer className={style.footer}>
                    ©2018 Created by
                    <span className={style.text}> Xiao Liu </span>
                </Footer>
            </Layout>
        )
    }
}

export default Home
