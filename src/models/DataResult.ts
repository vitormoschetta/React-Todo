export interface IDataResult {
    success: boolean,
    message: string,
    object: any
}

export class DataResult {
    constructor(
        public success: boolean,
        public message: string,
        public object: any = null
    ) { }
}