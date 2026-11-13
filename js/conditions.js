function isValidNumInput(target,num) {
    console.log(typeof num)
    return target.classList.contains("num-button") || (target.id === "button-sub" && num === "") || (target.id === "button-dot" && num !== "" && !String(num).includes("."))
}
function isValidOperatorInput(target,num){
    return target.classList.contains("operator-button") && num !=="" && num !=="-"
}
function isOperatable(target,num1,operator,num2) {
    return target.id === "button-=" && operator !==""&& num1 !=="" && num2 !==""&& num1 !=="-"
}