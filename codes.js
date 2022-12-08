class Password{
    
    static lowerCase = "abcdefghijklmnopqrstuvwxyz";
    static upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    static numbers   = "0123456789";
    static symbols   = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";

    length = document.getElementById("passwordLength").value;

    // Speichert alle Getter-Funktionen in einem Array, damit später per random 
    // Funktion ein getter ausgewählt werden kann.
    getKey = [this.upperCase, this.lowerCase, this.num, this.symbol]

    get upperCase(){
        return Password.upperCase[Math.floor(Math.random() * Password.upperCase.length)]
        }
    get lowerCase(){
        return Password.lowerCase[Math.floor(Math.random() * Password.lowerCase.length)]
    }
    get num(){
        return Password.numbers[Math.floor(Math.random() * Password.numbers.length)]
    }
    get symbol(){
        return Password.symbols[Math.floor(Math.random() * Password.symbols.length)]
    }
    password = ""
    //newPass = new Password;
}

function createPassword(){
    const newPass = new Password;
    randomMath = Math.random() * newPass.getKey.length //Test math.random()
        
    for (var i=0; i<newPass.length; i++){
        key = newPass.getKey[Math.floor(Math.random() * newPass.getKey.length)]
        newPass.password += key
        console.log("Random Key Durchlauf " + i + ": " + key)
    }
    console.log("Fertiges Passwort: " + newPass.password)
    return randomMath;
}
createPassword()
console.log(randomMath)
// const newPass2 = new Password;
// console.log(newPass2);

//Teststation
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

