let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";

function Password(lengthParam, lowerCaseParam, upperCaseParam, numbersParam, symbolsParam){
    this.length = lengthParam;
    this.lowerCase = lowerCaseParam;
    this.upperCase = upperCaseParam;
    this.numbers = numbersParam;
    this.symbols = symbolsParam;
}

let length = document.getElementById("passwordLength").value;

const newPass = new Password(length, lowerCase, upperCase, numbers, symbols);
console.log(newPass);

function getLowerCase(){
    const lower = newPass.lowerCase[Math.floor(Math.random() * newPass.lowerCase.length)];
    console.log(lower);
}
getLowerCase();