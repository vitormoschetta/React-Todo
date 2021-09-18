export interface IUser {
    id: string
    username: string
}

export class User implements IUser {
    constructor(
        public id: string,
        public username: string
    ) { }
}