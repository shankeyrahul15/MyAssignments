function calculateSum(n){
let sum = 0
for (i=1;i<=n;i++){
    sum+=i
    console.log(`adding ${i} into sum`)
    console.log("current sum is:"+sum)
}
console.log("================================")
return sum
}

let n=5
console.log(`The total sum of first ${n} natural number is: ${calculateSum(n)}`)