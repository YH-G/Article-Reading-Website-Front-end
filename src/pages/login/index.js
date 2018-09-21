import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button, Title } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props;

        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                    <Title>Sign in</Title>
                        <Input placeholder='Username' innerRef={(input) => {this.account = input}}/>
                        <Input placeholder='Password' type='password' innerRef={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>Sign in</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/' />
        }

        
    }

}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElement, passwordElement) {
        dispatch(actionCreators.login(accountElement.value, passwordElement.value))
    }
})

export default connect(mapState, mapDispatch)(Login);