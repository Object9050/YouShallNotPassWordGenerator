// Picks the value of a random index in an array
function pickRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

// Class with static variables, stored in an array and 
// a method to retrieve a random key from the array
class PasswordGenerator{
    
    static lowerCase = "abcdefghijklmnopqrstuvwxyz";
    static upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    static numbers   = "0123456789";
    static symbols   = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
    static keyClass = [
        PasswordGenerator.lowerCase,
        PasswordGenerator.upperCase,
        PasswordGenerator.numbers,
        PasswordGenerator.symbols
    ];

    // Brilliant solution compared to git commit 'devHell2' without any getter functions.
    // 1. Picks the content of a random keyClass element.
    // 2. Picks a random key from said element.
    // Got inspired by stackoverflow: https://stackoverflow.com/questions/74729692/why-does-my-password-generator-written-in-javascript-often-return-passwords-with
    getKey(){
        const kcls = pickRandom(PasswordGenerator.keyClass);
        return pickRandom(kcls);        
    }
}

function createPassword(){
    const lower = document.getElementById("lowerCase").checked;
    const upper = document.getElementById("upperCase").checked;
    const number = document.getElementById("numbers").checked;
    const symbol = document.getElementById("symbols").checked;
    if (upper + lower + number + symbol == 0) {
      alert("Markiere mindestens ein Kästchen!");
      return;
    }
    const newPass = new PasswordGenerator();
    let password = "";
    let length = document.getElementById("passwordLength").value;
    let passwordField = document.getElementById("passwordField");
        
    for (var i=0; i<length; i++){
        let key = newPass.getKey()
        password += key
        //let isChecked = document.getElementById(newPass.getKey.name).checked;
        // if (((lower == true) && (upper==true) || (upper==false)) && ((number==true) || (number==false)) && ((symbol==true) || (symbol==false))) {
        //     password += key
        // }
        // else if (((lower == false) && (upper==true) || (upper==false)) && ((number==true) || (number==false)) && ((symbol==true) || (symbol==false))) {
        //     console.log("Key wird nicht hinzugefügt")
        //     }
        // else if (((upper == true) && (lower==true) || (lower==false)) && ((number==true) || (number==false)) && ((symbol==true) || (symbol==false))) {
        //     password += key
        //     }
        // else if (((number == true) && (lower==true) || (lower==false)) && ((upper==true) || (upper==false)) && ((symbol==true) || (symbol==false))) {
        //     password += key
        //     }
        // else if (((symbol == true) && (lower==true) || (lower==false)) && ((number==true) || (number==false)) && ((upper==true) || (upper==false))) {
        //     password += key
        //     }
        // else if (number==true){
        //     password += key
        // }
        // else if (symbol==true){
        //     password += key
        // }
        // else {
        //      console.log("Nicht vorgesehen");
        // }
        //console.log("Random Key Run " + i + ": " + key)
    }
    console.log("Fertiges Passwort: " + password)
    passwordField.innerText = password;
}

// const newPass2 = new PasswordGenerator;
// console.log(newPass2);

// Testing Station
// let x = newPass2.upperCase
// console.log(x)
// let y = newPass2.lowerCase
// console.log(y)
// let z = newPass2.symbol
// console.log(z)
// let a = newPass2.num
// console.log(a)
// let randomGetter = newPass2.getKey[Math.floor(Math.random() * newPass2.getKey.length)]
// console.log(randomGetter)
// const test = 
//     {"name1": "inhalt1", "name2": "inhalt2", "name3": "inhalt3"}
//     console.log (test.name1)



