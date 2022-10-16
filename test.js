export default class Person {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    fullName() {
        return `${this.fname} ${this.lname}`;
    }

    details(){
        return `${this.fname} ${this.lname}  ${this.age}`;
    }
}

export function hobby(hoby){
    return `I love ${hoby}`
}
export let pi = 123456;

