export interface IUser {
    email: string
    username: string
}

export class User implements IUser {
    constructor(
        public email: string,
        public username: string
    ) { }
}


export class UserLogin {
    constructor(
        public email: string,
        public password: string
    ) { }
}

