//let score=0
function calculateGrade(score){
    let grade=''
    switch(true){
        case (score>80 && score<=100):
            grade="A"
            console.log("You are passed with grade "+grade)
            break
        case (score>60 && score<=80):
            grade='B'
            console.log("You are passed with grade "+grade)
            break
        case (score>40 && score<=60):
            grade='C'
            console.log("You are passed with grade "+grade)
            break
        case (score>=0 && score<=40):
            grade='F'
            console.log("You are failed with grade "+grade)
            break
        default:
            console.log("Please provide valid score of student 0-100 to caluculate grade")
    }
    return grade
}

calculateGrade(102)
calculateGrade(-4)
calculateGrade(90)
calculateGrade(79)
calculateGrade(56)
calculateGrade(35)