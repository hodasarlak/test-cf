	const people = [
  { name: "Alice", age: 25, job: "Engineer" },
  { name: "Bob", age: 32, job: "Designer" },
  { name: "Charlie", age: 29, job: "Teacher" },
  { name: "Diana", age: 24, job: "Developer" },
  { name: "Ethan", age: 35, job: "Manager" },
  { name: "Fiona", age: 28, job: "Engineer" },
  { name: "George", age: 41, job: "CEO" },
  { name: "Hannah", age: 30, job: "Marketing" },
  { name: "Ian", age: 27, job: "Support" },
  { name: "Jasmine", age: 33, job: "HR" }
];
// ۲. میانگین سنی آدما تو هر شغلی رو بدست بیارین.
const jobs = { 
    name : '',
    sum : 0
};
people.forEach( job => {
    if (!jobs[person.job]) {
      jobs = {
        total
      }
    } 
    sum = sum + person.age
});
console.log(jobs)

// ۱. بر اساس سن هر کدوم از آدما، سطح سینیور بودنشون رو مشخص کنین و به لیست آدما اضافه کنین.
// زیر ۳۰ سال: junior
// بین ۳۰ تا ۴۰: min
// بالای ۴۰ سال: senior
// مثال
// [
//     { name: "Bob", age: 32, job: "Designer", level: "Mid" }
// ]
const peopleLevel = [...people];
console.log(peopleLevel)
peopleLevel.map( person =>  {
    if (person.age < 30 ) {
        person.level = "junior"
    } else  if (person.age<=40 ){
        person.level = "mid"
        } else  person.level = "sinior"; 
})
console.log(peopleLevel);


// ۲. میانگین سنی آدما تو هر شغلی رو بدست بیارین.
// ۳. پیدا کنین چه شغلی، سینیورهای بیشتری داره