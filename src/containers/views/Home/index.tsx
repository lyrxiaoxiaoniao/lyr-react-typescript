import * as React from "react"
import { Layout, Menu, Icon, BackTop, Dropdown, Avatar, Button } from "antd"
const { Header, Content, Footer } = Layout
import { observer, inject } from "mobx-react"
import * as style from "./index.scss"
import { withRouter } from "react-router-dom"
import { RouteComponentProps } from "react-router"
// import Player from "@components/Player"
// import { Ajax as $http, PageResponse } from "../../../server/axios"
import localStorage from "@utils/localStorage"
import LoginDialog from "../Login/index"
interface Iprops extends RouteComponentProps {
    menuStore?: IMenuStore.MenuStore
    [key: string]: any
}
@inject("menuStore")
// There is a known issue in TypeScript, which doesn't allow decorators to change the signature of the classes
// they are decorating. Due to this, if you are using @withRouter decorator in your code,
// you will see a bunch of errors from TypeScript. The current workaround is to use withRouter() as a function call
// on a separate line instead of as a decorator.
// @(withRouter as any)  // 需要使用withRouter注入history,match,location等对象到props时候 typescript中有一个已知问题，不允许修改类的签名所以这里withRouter作为函数使用 export default withRouter(Home)
@observer
class Home extends React.Component<Iprops, any> {
    componentDidMount() {
        // $http.get<PageResponse>("/test", { params: { a: 1 } }).then(data => {
        //     // 无报错，并且对 data 提示 success、data、message?
        //     console.log(data, "adasd")
        // })
    }
    componentWillMount() {
        if (localStorage.get("userinfo")) {
            this.props.menuStore.setUserinfo(
                localStorage.get("userinfo")
            )
        }
        const key = `/${this.props.location.pathname.split("/")[1]}`
        this.props.menuStore.SelectedKey[0] = key
    }
    onLinkClick = (str: string) => {
        this.props.history.push(str)
        this.props.menuStore.SelectedKey[0] = str
    }
    showLoginDialog = () => {
        this.props.menuStore.onCancel()
    }
    render() {
        const { userinfo } = this.props.menuStore
        const islogin: boolean = Boolean(Object.keys(userinfo).length)
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a rel="noopener noreferrer" href="#">
                        退出登录
                    </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>注销</Menu.Item>
            </Menu>
        )
        return (
            <Layout className={style.layout}>
                <LoginDialog />
                {/* <div className={style.player}>
                    <Player />
                </div> */}
                <Header className={style.header}>
                    <div className={style.menuContainer}>
                        <div className={style.islogin}>
                            {islogin ? (
                                <Dropdown overlay={menu}>
                                    <a className={style.droplogin} href="#">
                                        <Avatar
                                            style={{ marginRight: "10px" }}
                                            size={32}
                                            src={require("@assets/favicon.png")}
                                        />
                                        {userinfo.username}
                                    </a>
                                </Dropdown>
                            ) : (
                                <Button onClick={this.showLoginDialog}>
                                    登录
                                </Button>
                            )}
                        </div>
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
                                <Icon type="home" />
                                首页
                            </Menu.Item>
                            {/* <Menu.Item
                                key="/topic"
                                onClick={this.onLinkClick.bind(this, "/topic")}
                            >
                                <Icon type="read" />
                                文章
                            </Menu.Item>
                            <Menu.Item
                                key="/counter"
                                onClick={this.onLinkClick.bind(
                                    this,
                                    "/counter"
                                )}
                            >
                                <Icon type="mail" />
                                mobx
                            </Menu.Item> */}
                            <Menu.Item
                                key="/mine"
                                onClick={this.onLinkClick.bind(this, "/mine")}
                            >
                                <Icon type="user" />
                                我的
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>
                {/* <Content className={style.content}>
                    <div className={style.left}>{this.props.children}</div>
                    <div className={style.user}>
                        信息栏------------介绍
                    </div>
                </Content> */}
                <Content className={style.content}>
                    {this.props.children}
                </Content>
                <BackTop style={{ bottom: "100px" }} />
                <Footer className={style.footer}>
                    ©2018 Created by
                    <span className={style.text}> Xiao Liu </span>
                </Footer>
            </Layout>
        )
    }
}

export default withRouter(Home)
// export default Home
