console.log(Math.floor(2.1))
console.log(Math.ceil(2.1))
console.log(Math.round(2.1))
console.log(Math.round(2.6))
console.log(Math.random())

const getRandom = () => {
    return Math.floor(Math.random() *10 )+ 1 ;
}

console.log(getRandom())

const getRandom2 = () => {
    return Math.floor(Math.random( ) *6) +1
}

console.log(getRandom2())

const getRandom3= (max , min) => {
    return  Math.floor(Math.random( ) * max) + min
}

console.log (getRandom3(5 , 7))

const getRandom4= (min , max) => {
    return Math.floor(Math.random( ) *( max - min + 1))+min;
}

console.log (getRandom4( 4 , 7))
const people = [
  { name: "Alice", age: 45, job: "Engineer" },
  { name: "Bob", age: 32, job: "Designer" },
  { name: "Charlie", age: 29, job: "Teacher" },
  { name: "Diana", age: 24, job: "Developer" },
  { name: "Ethan", age: 35, job: "Manager" },
  { name: "Fiona", age: 48, job: "Engineer" },
  { name: "George", age: 41, job: "CEO" },
  { name: "Hannah", age: 30, job: "Marketing" },
  { name: "Ian", age: 27, job: "Support" },
  { name: "Jasmine", age: 33, job: "HR" }
];

console.log(people[getRandom4 ( 0 , people.length -1)]);

let arr1 = []; 
let arr2=[];


const now = new Date();
console.log(now);
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getFullYear())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DayOfWeek = now.getDay();
console.log(DayOfWeek)
console.log(weekdays[DayOfWeek])

const i18n = new intl.DatTimeFormat('fa-ir').format();
console.log(i18n)




