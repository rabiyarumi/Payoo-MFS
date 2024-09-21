//step-1: set event handler
document.getElementById('login-btn').addEventListener('click', function(event){
    //step-2: prevent default behavior
    event.preventDefault(); //stop reloading the page

    //step-3: get the mobaile & pin number
    const mobailNumber = document.getElementById('mobail-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(mobailNumber, pinNumber);

    //step-4: chack the validate phone number & pin 
    if(mobailNumber=== '5' && pinNumber=== '1234'){
        console.log('your are logged in');
        window.location.href= 'home.html'
    }
    else{
        alert('wrong phone number & pin');
    }
})