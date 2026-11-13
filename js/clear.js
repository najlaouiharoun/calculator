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
        return true
    }
    return false
    
}