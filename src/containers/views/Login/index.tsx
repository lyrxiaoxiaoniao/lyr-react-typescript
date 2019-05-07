import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import { Form, Icon, Input, Button, Checkbox, Modal } from "antd"
import { Ajax as $http } from "@server/axios"
import * as style from "./index.scss"
import { observer, inject } from "mobx-react"
import localStorage from "@utils/localStorage"
const FormItem = Form.Item
interface Iprops {
    menuStore?: IMenuStore.MenuStore
    [key: string]: any
}
@inject("menuStore")
@observer
class LoginForm extends ComponentExt<Iprops, any> {
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log("Received values of form: ", values)
                $http.post("/user/login", values).then((res: any) => {
                    // $http.post("/user/register", values).then((res: any) => {
                    // console.log(res.data.token, "res")
                    if (res.code === "1000") {
                        this.$message.error(res.data.message)
                    } else {
                        this.$message.success(res.data.message)
                        localStorage.set("token", res.data.token)
                        localStorage.set("userinfo", res.data.data)
                        this.props.menuStore.setUserinfo(res.data.data)
                        this.props.menuStore.onCancel()
                    }
                })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { loginVisiable, onCancel } = this.props.menuStore
        return (
            <div>
                <Modal
                    title="登录-注册"
                    visible={loginVisiable}
                    footer={null}
                    onCancel={onCancel}
                >
                    <Form
                        onSubmit={this.handleSubmit}
                        className={style.loginForm}
                    >
                        <FormItem>
                            {getFieldDecorator("username", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your username!"
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{
                                                color: "rgba(0,0,0,.25)"
                                            }}
                                        />
                                    }
                                    placeholder="Username"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator("password", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your Password!"
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{
                                                color: "rgba(0,0,0,.25)"
                                            }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator("remember", {
                                valuePropName: "checked",
                                initialValue: true
                            })(
                                <Checkbox className={style.loginFormCheck}>
                                    Remember me
                                </Checkbox>
                            )}
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={style.loginFormButton}
                            >
                                Log in
                            </Button>
                            Or <a href="#">register now!</a>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm as any)
export default WrappedNormalLoginForm
