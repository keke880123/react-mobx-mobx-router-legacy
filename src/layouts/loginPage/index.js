import React from 'react';
import { inject, observer } from 'mobx-react';
import './style.scss';
import views from '../../router';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        console.log('this', this);
        this.store = props.store.app;
        this.router = props.store.router;
        console.log('store', this.store);
        this.state = {
            name: ''
        };
    }

    changedName = e => {
        console.log('changed name');
        // console.log('e', e);
        // console.log('value', e.target.value);
        this.setState({
            name: e.target.value
        });
    };

    clickedLoginButton = () => {
        console.log('clicked login button');
        // console.log('state', this.state);
        this.store.user.setUser(this.state.name);
        this.router.goTo(views.mainPage, {}, this.props.store);
    };

    render() {
        // const { store } = this.props.store;
        // console.log('store', store);
        return (
            <div className={'container-loginPage'}>
                <h2>Login Page</h2>
                <div>
                    <input type="text" placeholder="이름을 입력해 주세요" value={this.state.name} onChange={this.changedName} />
                    <button onClick={this.clickedLoginButton}>로그인</button>
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(LoginPage));
