/* eslint-env es6 */
/* eslint-disable */

const Range = document.getElementById('lengthRange');
const length = document.getElementById('length');


length.addEventListener('input',syncLength)
Range.addEventListener('input',syncLength)


function syncLength(e){
    const value = e.target.value
    length.value=value
    Range.value=value
}





function generate() {
    
    let password = "";
    
    let length = document.getElementById("length").value;
    
    let lowerCase = document.getElementById("lowercase").checked;
    let upperCase = document.getElementById("uppercase").checked;
    let number = document.getElementById("numbers").checked;
    let symbol = document.getElementById("symbols").checked;
 
    
    if(lowerCase + upperCase + number + symbol <= 0)
        return;
    
    for(let i = 0; i<length; i++){              
        
        const r = generater(0, 3);
        if(lowerCase && r === 0){
            password += generateRandomLowerCase();
        }else if(upperCase && r === 1){
            password += generateRandomUpperCase();
        }else if(number && r === 2){
            password += generater(0,9);
        }else if(symbol && r === 3){
            password += generateRandomSymbol();
        }else {
            i--;
        }
    }
    
    
    document.getElementById("result").value= password;
    
    document.getElementById("lastPasswords").innerHTML += password + "<br/>";
    
}



function generateRandomLowerCase() {
    return String.fromCharCode(generater(97,122));
}

function generateRandomUpperCase() {
    return String.fromCharCode(generater(65,90));
}

function generater(min = 0, max = 1) {
    return Math.floor(Math.random() * (max + 1 - min) + min );
}

function generateRandomSymbol() {
    const symbols = "~*@%#$^&!?'-=/,.{}()[]_+";
    return symbols[generater(0, symbols.length - 1)];
}


function copyToClipboard(){
    
    document.getElementById("result").select();
    
    document.execCommand("Copy");
    
    alert("Password Copied to Clipboard!");
}



function delpass()
{   

     document.getElementById("lastPasswords").innerHTML = ""; 
    
   
     alert("Last generated password deleted!");

}





