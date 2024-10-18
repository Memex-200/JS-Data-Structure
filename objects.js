// key value pairs
// not iterable

const obj = {
  firstName: "Eman",
  age: 20,
  sayName: function () {
    console.log("your Name is : " + obj.firstName);
  },
};
obj.lastName = "Hassan";
delete obj.lastName;
console.log(obj);
console.log(obj.firstName);
console.log(obj["age"]);
obj.sayName();
