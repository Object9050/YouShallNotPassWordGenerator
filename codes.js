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
    const isCheckedLower = document.getElementById("lowerCase").checked;
    const isCheckedUpper = document.getElementById("upperCase").checked;
    const isCheckedNumber = document.getElementById("numbers").checked;
    const isCheckedSymbol = document.getElementById("symbols").checked;
    if (isCheckedUpper + isCheckedLower + isCheckedNumber + isCheckedSymbol == 0) {
      alert("Markiere mindestens ein Kästchen!");
    }
    const newPass = new PasswordGenerator();
    const isChecked=[isCheckedLower, isCheckedUpper, isCheckedNumber, isCheckedSymbol]
    let password = "";
    let length = document.getElementById("passwordLength").value;
    let passwordField = document.getElementById("passwordField");
        
    while (password.length < length){
        let key = newPass.getKey()
        let classOfKey = PasswordGenerator.keyClass
        for (var i in classOfKey){
            if (classOfKey[i].includes(key) && isChecked[i] == true){
                password += key
            // if (classOfKey[0].includes(key) && isChecked[0] == true){
            //     password += key
            // } else if (classOfKey[1].includes(key) && isChecked[1] == true){
            //     password += key
            // } else if (classOfKey[2].includes(key) && isChecked[2] == true){
            //     password += key
            // } else if (classOfKey[3].includes(key) && isChecked[3] == true){
            //     password += key
            } else {
                console.log("Du kommst hier nicht rein")
            }
        }
    } 
    console.log("Fertiges Passwort: " + password)
    passwordField.innerText = password;
}  

function shallPass(arrClassOfKey, arrIsChecked, key, password){
    for (var i=0; i<arrClassOfKey; i++){
        (arrClassOfKey[i].includes(key) && arrIsChecked[i] == true)
        return password += key // Hier stimmt irgendwas nicht
    }
}


/////////// Testing Station ///////////
// Test of function includes()
let test = PasswordGenerator.keyClass
let char = "F"
let testFind = test[1].includes(char)
console.log(`Dies ist der Inhalt des Arrays an Index 1:\n${test[1]}`)
console.log(`Das Zeichen F ist darin enthalten: ${testFind}`)