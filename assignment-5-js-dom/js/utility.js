
// get input value
function getInputValue(inputId){
    let inputBox = document.getElementById(inputId);
    let inputValue = inputBox.value;
    return parseFloat(inputValue)
}
// get any tag innerText value
function getInnerTextValue(userId){
    let userBox = document.getElementById(userId);
    let userValue = userBox.innerText;
    return parseFloat(userValue)
}

