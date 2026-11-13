
function updateNum(num,input){
   return   num + input
} 
function updateView(num) {
    let operationScreen = getOperationScreen()
    operationScreen.textContent += num 
}

