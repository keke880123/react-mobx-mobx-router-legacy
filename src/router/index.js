import React from 'react';
import { Route } from 'mobx-router';
// components
import MainPage from '../layouts/mainPage';
import LoginPage from '../layouts/loginPage';

const views = {
    mainPage: new Route({
        path: '/',
        component: <MainPage />,
        onEnter: (route, params, store) => {
            console.log('enter to main page');
            console.log('route', route);
            console.log('store', store);
            if (store.app.user.name == '') {
                store.router.goTo(views.loginPage, {}, store);
            }
        }
    }),
    loginPage: new Route({
        path: '/login',
        component: <LoginPage />
    }),
    tabPage: new Route({
        path: '/:tab',
        component: <MainPage />,
        onEnter: (route, params, store) => {
            if (store.app.user.name == '') {
                store.router.goTo(views.loginPage, {}, store);
            }
        }
    })
};

export default views;
