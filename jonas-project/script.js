//writing objects
const anob = {
    firstName: 'Anob',
    lastName: 'Takon',
    age: 2022-1997,
    job: 'Web developer',
    friends: ['Favour', 'Fikayo', 'Tahtah']
};
console.log(anob);

let nameKey = "Name"

console.log(anob ["last" + nameKey]);
console.log(anob.firstName + " has" + " " + anob.friends.length + " friends " + " his " + " bestfriend " + "is " + "called " + anob.friends[0])

//A shorter way to do it
console.log(`${anob.firstName} has ${anob.friends.length} friends her bestfriend is called ${anob.friends[1]}`)

//using parseInt & parseFloat

const quantity = '10';
console.log(parseFloat(quantity, 10));

'hello, world'.replace('world', 'mars'); // "hello, mars"
let string = 5 + 5 +"5";
console.log(string)

//ways to create an empty object
// const object = new object();
// let subject ={
// }

const a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);

//jsx
// const element = <h1>Hello, world!</h1>;
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
console.log(element);




