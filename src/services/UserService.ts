import { User } from "../models/User";

export class UserService {

    USER_STORE: string = 'user';

    getLocalStorage(): User {
        const data = localStorage.getItem(this.USER_STORE) || '';
        const result = JSON.parse(data) as User;
        return result;
    }

    setLocalStorage(user: User) {
        localStorage.setItem(this.USER_STORE, JSON.stringify(user));
    }

    removeUserLocalStorage(key: string) {
        localStorage.removeItem(key)
    }

    clearLocalStorage() {
        localStorage.clear();
    }
}

