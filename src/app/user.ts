export class User {
    constructor(
        public fname: string,
        public lname: string,
        public email: string,   
        public password: string,
        public gender: string,
        public address: string,
        public street: string,
        public city: string,
        public state: string,
        public zip: number,
        public check: boolean,
    ){}
}
