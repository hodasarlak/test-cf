const cars = {
  bmw: { price: 50000, inStock: 4 },
  toyota: { price: 30000, inStock: 10 },
  tesla: { price: 70000, inStock: 2 },
  ford: { price: 25000, inStock: 8 }
}
const x=0;g

const bestSeller = {
    name : '',
    count: 10,
    price : 0
}
Object.entries(cars).forEach( car => {
    if (bestSeller.count > car[1].inStock) {
        bestSeller.name = car[0],
        bestSeller.count = car[1].inStock,
        bestSeller.price=car[1].price
    }
})
const finalCost=(10 - bestSeller.count) * ( bestSeller.price*0.8)
console.log(finalCost)

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
// ۱. بر اساس سن هر کدوم از آدما، سطح سینیور بودنشون رو مشخص کنین و به لیست آدما اضافه کنین.
// زیر ۳۰ سال: junior
// بین ۳۰ تا ۴۰: min
// بالای ۴۰ سال: senior
// مثال
// [
//     { name: "Bob", age: 32, job: "Designer", level: "Mid" }
// ]

people.map(person => {
    if(person.age<30)  {
        person.level ="junior" 
    } else if (person.level <=40) {
        person.level= "mid"
    } else {
        person.level = "sinior"
    }
} ) 
console.log(people);


// ۲. میانگین سنی آدما تو هر شغلی رو بدست بیارین.
let jobObj ={}
people.forEach( person => {
    if (!jobObj[person.job]) {
        jobObj[person.job] = {
                total : 0 , 
                count : 0
        } ;
    } 
    jobObj[person.job].total = jobObj[person.job].total + person.age;
    jobObj[person.job].count =   jobObj[person.job].count  + 1 ;
}) ;

console.log(jobObj)
console.log(Object.entries(jobObj))

Object.entries(jobObj).forEach( job => { 
        avrage= job[1].total /job[1].count;
       console.log ( job[0] +":" + avrage)
  } 
)


// ۳. پیدا کنین چه شغلی، سینیورهای بیشتری داره
const  jobName ={
    name : "",
    count : 0
}
console.log(people)
const seniorCount = {}
people.forEach (person => {
    if( person.age> 40) {
        if (!seniorCount[person.job]) {
             seniorCount[person.job]  = 0;
        }
         seniorCount[person.job]  =  seniorCount[person.job]  + 1;
    }
})
console.log(seniorCount )
let max = 0 , name=""
Object.entries(seniorCount).forEach (item => {
 if (item[1] > max){
    name= item[0]
    max = item[1]
 }
})
console.log(name)
const test = 0;
