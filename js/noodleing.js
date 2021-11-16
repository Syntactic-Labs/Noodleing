"use strict";
var header = "Name | Age | Email | Bff";
var Friend = (function () {
    function Friend(name, age, email, bff) {
        this.name = "";
        this.age = 0;
        this.email = "";
        this.bff = false;
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    Friend.prototype.print = function () {
        return this.name + " | " + this.age + " | " + this.email + " | " + this.bff;
    };
    return Friend;
}());
var friends = [
    new Friend("Todd", 35, "Todd@gmail.com", true),
    new Friend("Bob", 24, "Bob@gmail.com", false),
    new Friend("Nathan", 94, "Nathan@gmail.com", false),
    new Friend("Bill", 17, "Bill@gmail.com", false),
    new Friend("Steph", 34, "Steph@gmail.com", false),
    new Friend("Mike", 55, "Mike@gmail.com", false)
];
console.log(header);
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    console.log(friend.print());
}
