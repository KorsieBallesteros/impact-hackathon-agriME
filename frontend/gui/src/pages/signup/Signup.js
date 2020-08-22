import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/auth';
import {Form,Input,Button} from 'antd';
import {UserOutlined, MailOutlined,LockOutlined} from '@ant-design/icons';

class RegistrationForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
    this.props.onAuth(values.username, values.email, values.password, values.confirm);
    this.props.history.push('/');
  };

  render(){
    return (
        <Form ref={this.formRef} name="register" onFinish={this.onFinish}>
            <Form.Item name="username" rules={[
                    {
                    required: true,
                    message: 'Please input your Username!',
                    },]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item name="email" 
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}>
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail"/>
            </Form.Item>

            <Form.Item name="password" 
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback>
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"/>
            </Form.Item>

            <Form.Item name="confirm" dependencies={['password']} hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject('The two passwords that you entered do not match!');
                    },
                }),
                ]}>
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password"/>
            </Form.Item>

            
            
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Signup
                </Button>
                Or
                <NavLink to='/login/'>
                    Login 
                </NavLink>
            </Form.Item>
        </Form>
    );
  }
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);