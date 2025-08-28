let s="Hello World"
let splittedS=s.split(' ')
let length = splittedS[1].length
console.log(`The last word is '${splittedS[1]}' with length ${length}`)

console.log("=========================================")

let s1 = "   fly me   to   the moon  "
let splittedS1=s1.trim().split(' ')
let lWord=splittedS1[splittedS1.length-1]
let length1=lWord.length
console.log(`The last word is '${lWord}' with length ${length1}`)

console.log("=========================================")

function isAnagram (input1, input2){
    let in1=input1.trim().toLowerCase()
    let in2=input2.trim().toLowerCase()
    in1 = in1.split('').sort().join('')
    in2 = in2.split('').sort().join('')
    console.log(in1==in2 ? true : false)
}

isAnagram('listen', 'silent')
isAnagram('Hello', 'World')