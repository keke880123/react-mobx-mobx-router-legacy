import { decorate, observable, action, computed } from 'mobx';

export default class UserStore {
    name = '';

    setUser = name => {
        this.name = name;
    };
}

decorate(UserStore, {
    name: observable,
    setUser: action
});
