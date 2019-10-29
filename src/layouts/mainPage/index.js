import React from 'react';
import { inject, observer } from 'mobx-react';
import './style.scss';
import views from '../../router';
// components
import CarsTab from '../../views/mainTabs/cars';
import FriendsTab from '../../views/mainTabs/friends';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.store = props.store.app;
        this.router = props.store.router;
    }

    clickedTab = tab => {
        console.log('clicked tab');
        this.router.goTo(views.tabPage, { tab: tab }, this.props.store);
        // console.log('params', this.router.params.tab);
    };

    render() {
        return (
            <div className={'container-mainPage'}>
                <h2>Main Page</h2>
                <div className={'user-name'}>user : {this.store.user.name}</div>
                <div className={'tab-box'}>
                    <span>Tab Box</span>
                    <div>
                        <button onClick={() => this.clickedTab('cars')}>cars</button>
                        <button onClick={() => this.clickedTab('friends')}>friends</button>
                    </div>
                    {(() => {
                        switch (this.router.params.tab) {
                            case 'cars':
                                return <CarsTab />;
                            case 'friends':
                                return <FriendsTab />;
                            default:
                                return false;
                        }
                    })()}
                    <div></div>
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(MainPage));
