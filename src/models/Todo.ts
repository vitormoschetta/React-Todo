export class Todo {
    constructor(        
        public title: string,
        public done: boolean = false,        
    ) { }

    public id: string = ''
}