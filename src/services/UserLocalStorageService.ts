import { User, IUser } from "../models/User";


export interface IUserLocalStorageService {
    userLocalStorageService: UserLocalStorageService
}

export default class UserLocalStorageService {

    USER_STORE: string = 'user';

    getUser(): any {
        const data = localStorage.getItem(this.USER_STORE) || '';
        try {
            const result = JSON.parse(data) as User;
            return result;
        } catch (error) {
            return null;
        }
    }

    setUser(user: IUser) {
        localStorage.setItem(this.USER_STORE, JSON.stringify(user));
    }

    removeUser() {
        localStorage.removeItem(this.USER_STORE)
    }
}

