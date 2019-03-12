import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import { Form, Icon, Input, Button, Checkbox } from "antd"
import { Ajax as $http } from "@server/axios"
import "./index.scss"
import * as style from "./index.scss"
import localStorage from "@utils/localStorage"
const FormItem = Form.Item
class LoginForm extends ComponentExt<any, any> {
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log("Received values of form: ", values)
                $http.post("/user/login", values).then((res: any) => {
                // $http.post("/user/register", values).then((res: any) => {
                    // console.log(res.data.token, "res")
                    localStorage.set('token', res.data.token)
                })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className={style.login}>
                <Form onSubmit={this.handleSubmit} className={style.loginForm}>
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
                                        style={{ color: "rgba(0,0,0,.25)" }}
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
                                        style={{ color: "rgba(0,0,0,.25)" }}
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
                        <a className={style.loginFormForgot} href="">
                            Forgot password
                        </a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={style.loginFormButton}
                        >
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm)
export default WrappedNormalLoginForm
