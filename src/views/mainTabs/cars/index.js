import React from 'react';
import { inject, observer } from 'mobx-react';
import './style.scss';
// import views from '../../router';

class CarsTab extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className={'container-CarsTab'}>Cars Tab</div>;
    }
}

export default inject('store')(observer(CarsTab));
