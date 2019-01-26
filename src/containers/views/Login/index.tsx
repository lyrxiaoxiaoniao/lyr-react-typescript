import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import { Form, Icon, Input, Button, Checkbox } from "antd"
import axios from "axios"
import "./index.scss"
import * as style from "./index.scss"
const FormItem = Form.Item
class LoginForm extends ComponentExt<any, any> {
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log("Received values of form: ", values)
                axios
                    .post("http://localhost:3000/api/user/login", values)
                    // .post("http://localhost:3000/api/user/register", values)
                    .then((res: any) => {
                        console.log(res, "res")
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
                        {getFieldDecorator("userName", {
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
