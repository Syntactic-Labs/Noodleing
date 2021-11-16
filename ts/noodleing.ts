const header = "Name | Age | Email | Bff";
class Friend {
    name: string = "";
    age: number = 0;
    email: string = "";
    bff: boolean = false;
    constructor(name: string, age: number, email: string, bff: boolean) {
        this.name=name;
        this.age=age;
        this.email=email;
        this.bff=bff;
    }
    print(): string {
        return `${this.name} | ${this.age} | ${this.email} | ${this.bff}`;
    }
    
}

let friends: Friend[] = [
    new Friend("Todd", 35, "Todd@gmail.com", true),
    new Friend("Bob", 24, "Bob@gmail.com", false),
    new Friend("Nathan", 94, "Nathan@gmail.com", false),
    new Friend("Bill", 17, "Bill@gmail.com", false),
    new Friend("Steph", 34, "Steph@gmail.com", false),
    new Friend("Mike", 55, "Mike@gmail.com", false)
];
console.log(header);
for(let friend of friends) {
    console.log(friend.print());
}
