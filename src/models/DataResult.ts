export class DataResult {
    constructor(
        public success: boolean,
        public message: string,
        public object: any = null
    ) { }
}