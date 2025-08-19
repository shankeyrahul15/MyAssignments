const city = "Pune"
console.log("I live in "+city)

var marks=85
//marks+=10
marks=marks+10
console.log(marks)

let isWeekend=true
if(isWeekend){
    console.log("Relax")
}
else{
    console.log("Work")
}

var futureGoal
console.log(typeof futureGoal)

console.log("+++++++++++++++++++++++++++++++++++++++++++++")

console.log(city)
console.log(marks)
console.log(isWeekend)
console.log(futureGoal)

console.log("+++++++++++++++++++++++++++++++++++++++++++++")

console.log(typeof city)
console.log(typeof marks)
console.log(typeof isWeekend)
console.log(typeof futureGoal)

console.log("+++++++++++++++++++++++++++++++++++++++++++++")

console.log("differences between var and let \n1. var is global scoping keyword while let is block scoping keyword \n2. var allow redeclare and reassignment of value while let doesn't allow redeclare and allow reassignment of value \n3. In var hoisting happens while in let hoisting happens but cannot be used before initialization")