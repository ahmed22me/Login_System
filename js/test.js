function user(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

user.prototype.sayHi = function () {
    console.log("hi" + this.name);
}

let ahmed = new user("ahmed", 23 , "male");

let hend = new user("hend" , 12 , "female");