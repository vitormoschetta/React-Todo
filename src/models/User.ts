export interface UserProps {
    id: string
    name: string
}

export class User implements UserProps {
    constructor(
        public id: string,
        public name: string
    ) { }
}