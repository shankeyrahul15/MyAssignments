function launchBrowser(browserName){
    if (browserName=="chrome"){
        console.log("Launched browser is: "+browserName)
    }
    else{
        console.log("Other browser is launched and the browser name is: "+browserName)
    }
}


launchBrowser("safari")
launchBrowser("chrome")

console.log("=========================================")

function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Run smoke tests")
            break
        case "sanity":
            console.log("Run sanity tests")
            break
        case "regression":
            console.log("Run regression tests")
            break
        default:
            console.log("Do not need to run any test")
    }
}


runTests("sanity")
runTests("smoke")
runTests("Non Functional")
runTests("regression")
