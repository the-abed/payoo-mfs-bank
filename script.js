//Login function
document.getElementById('login-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    const mobileNum = 123456789;
    const pinNum = 1234;

    const mobileNumValue = document.getElementById("mobile-number").value;
    const mobileNumValueConverted = parseInt(mobileNumValue);
    const pinNumValue = document.getElementById("pin-number").value;
    const pinNumConverted = parseInt(pinNumValue);
    console.log(mobileNumValueConverted,pinNumConverted);
    
    if(mobileNumValueConverted === mobileNum && pinNumConverted === pinNum){
        window.location.href="./home.html"
    }else{
        alert("Invalid your mobile number or pin")
    }
})