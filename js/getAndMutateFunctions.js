function getInput(target){
    return target.textContent
}

function getOperationScreen() {
    return document.querySelector("#operation-screen")  
}


function updateNum(num,input){
    return   num + input
}
function setOperator(input) {
    return input
}

function updateView(num) {
    let operationScreen = getOperationScreen()
    operationScreen.textContent += num 
}

function clearAll(){

    clearView()
    return ["","",""]
}
function clearView(){
    let operationScreen = getOperationScreen()
    operationScreen.textContent = ""

}
function clearDoofus() {
    let operationScreen = getOperationScreen()
    if(operationScreen.textContent === "nice try doofus!"){
        clearView()
    }
    
}