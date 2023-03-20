function getPin(){
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + '';
    if(pinString.length == 4) {
        return pin ;
    }
    else{
        return getPin() ;
    }
}
// pin genarete button and input
function pinGenarete (){
    const pin = getPin() ;
    document.getElementById("pin-display").value = pin ;
}
// event handler pin type 
document.getElementById("key-pad").addEventListener('click',function(event){
    const number = event.target.innerText ;
    const inputNumber = document.getElementById("type-value");
    if (isNaN(number)){
        if(number == 'C'){
            inputNumber.value= '';
        }
        else{
            inputNumber.value = '' ;
        }
    }
    else{
        const previusNumber = inputNumber.value;
        const newNumber = previusNumber + number ;
        inputNumber.value = newNumber ;
    }
})

function getPinMatch(){
    const pin = document.getElementById("pin-display").value ;
    const typeNumber = document.getElementById("type-value").value ;
    const notifyFile = document.getElementById('notify-file') ;
    const notifySucsse = document.getElementById('notify-sucsse') ;
    if (pin == typeNumber && typeNumber != ''){
        notifyFile.style.display = "none" ;
        notifySucsse.style.display = "block";
    }
    else{
        notifySucsse.style.display = "none";
        notifyFile.style.display = "block";
    }
}