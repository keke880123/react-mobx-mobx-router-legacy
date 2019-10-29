import React from 'react';
import './assets/global.scss';
// mobx-router
import { RouterStore, MobxRouter, startRouter } from 'mobx-router';
import views from './router';
// mobx
import { Provider } from 'mobx-react';
import RootStore from './stores';
let store = new RootStore();
store = {
    app: {
        ...store
    },
    router: new RouterStore()
};
startRouter(views, store);
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>App Container</h1>
                <MobxRouter />
            </div>
        </Provider>
    );
}

export default App;
