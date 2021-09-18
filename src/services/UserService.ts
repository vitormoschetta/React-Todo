import { User, UserProps } from "../models/User";


export interface IUserService {
    userService: UserService
    children?: string
}

export class UserService {

    USER_STORE: string = 'user';

    get(): any {
        const data = localStorage.getItem(this.USER_STORE) || '';
        try {
            const result = JSON.parse(data) as User;
            return result;
        } catch (error) {
            return null;
        }
    }

    set(user: UserProps) {
        localStorage.setItem(this.USER_STORE, JSON.stringify(user));
    }

    remove() {
        localStorage.removeItem(this.USER_STORE)
    }

    clear() {
        localStorage.clear();
    }
}

