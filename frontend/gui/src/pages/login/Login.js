import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import {
    UserOutlined,
    LockOutlined,
  } from '@ant-design/icons';
  

class NormalLoginForm extends React.Component {
    formRef = React.createRef();
  
  
    onFinish = values => {
      console.log(values);
      this.props.onAuth(values.username, values.password);
      this.props.history.push('/');

    };
  
  
    render() {
      return (
     
        <Form  ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
            <Form.Item
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Username!',
                    },
                ]}
                >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
                <Form.Item
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Password!',
                    },
                ]}
                >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
                </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>

        </Form>
      );
    }
  }

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);