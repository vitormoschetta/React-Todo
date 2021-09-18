import { User, UserProps } from "../models/User";

export class UserService {

    USER_STORE: string = 'user';

    getLocalStorage(): any {
        const data = localStorage.getItem(this.USER_STORE) || '';
        try {
            const result = JSON.parse(data) as User;
            return result;
        } catch (error) {
            return null;
        }
    }

    setLocalStorage(user: UserProps) {
        localStorage.setItem(this.USER_STORE, JSON.stringify(user));
    }

    removeUserLocalStorage() {
        localStorage.removeItem(this.USER_STORE)
    }

    clearLocalStorage() {
        localStorage.clear();
    }
}

