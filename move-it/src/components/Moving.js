import React, { Component } from "react";

import { Form, Icon, Input, Button, DatePicker, message } from "antd";

import "./moving.css";

class Moving extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.setState(values);
        this.showMessage();
      }
    });
  };

  showMessage = () => {
    message.info("Check the state or console");
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };

    return (
      <div className="moving-form">
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          layout="horizontal"
        >
          <Form.Item>
            {getFieldDecorator("date-picker", config)(<DatePicker />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </Form.Item>
          Moving From:
          <Form.Item>
            {getFieldDecorator("streetfrom", {
              rules: [
                { required: true, message: "Please input your current street!" }
              ]
            })(<Input placeholder="Street Address" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("zipfrom", {
              rules: [
                {
                  required: true,
                  message: "Please input your current Zip Code!"
                }
              ]
            })(<Input placeholder="Zip Code" />)}
          </Form.Item>
          Moving To:
          <Form.Item>
            {getFieldDecorator("streetto", {
              rules: [
                { required: true, message: "Please input your future street!" }
              ]
            })(<Input placeholder="Street Address" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("zipto", {
              rules: [
                {
                  required: true,
                  message: "Please input your future Zip Code!"
                }
              ]
            })(<Input placeholder="Zip Code" />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Moving);
