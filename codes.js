let uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class Password{
    
    constructor(){
        this.lowerCase = "abcdefghijklmnopqrstuvwxyz"
        this.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    // numbers   = "0123456789";
    // symbols   = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";

    // length    = document.getElementById("passwordLength").value;

    get UpperCase(){
            return this.upperCase[Math.floor(Math.random() * this.upperCase.length)]


        }
        
    


}


const newPass = new Password;
console.log(newPass);

let x = newPass.UpperCase;
console.log(x);

