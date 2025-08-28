// Reusable function to get element value in number
function getElementByIdNumber (id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}
//function to get element value
function getElementByIdValue(id){
    const inputField = document.getElementById(id).value
    return inputField;
}
//function to get innerText 
function getInnerText (value){
    const elementInnerText = document.getElementById(value).innerText
    const elementInNumber = parseInt(elementInnerText);
    return elementInNumber;
}
// function to set inner text
function setAvailableBalance(value){
    console.log(value);
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value;
}
//function to toggle 
function handlerToggle (id){
    const forms = document.getElementsByClassName("form");
for(const from of forms){
    from.style.display = "none"

    document.getElementById(id).style.display = "block"
}
}
//function to toggle buttons
function handleToggleButton(id){
    const formBtns = document.getElementsByClassName("form-btn")
    
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-100")
    }
    document.getElementById(id).classList.remove("border-gray-100")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

//add money feature
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank = getElementByIdValue("bank-select")

    const accountNumber = getElementByIdValue("account-number")

    const amount = getElementByIdNumber("add-money")

    const addMoneyPin = getElementByIdNumber("add-money-pin")
    const validPin = 1234;
    const availableBalance = getInnerText("available-balance")
    console.log(bank,accountNumber,amount,addMoneyPin);
    
    if(accountNumber.length <11){
        alert('Invalid account number');
        return;
    }
    if( addMoneyPin !== validPin){
        alert('Invalid pin number');
        return;
    }
    const totalAvailableBalance = amount + availableBalance;
    setAvailableBalance(totalAvailableBalance);
})
//cash out feature
document.getElementById("withdraw-button").addEventListener('click',function(e){
    e.preventDefault()
    
    const amount = getElementByIdNumber("withdraw-money")

    const availableBalance = getInnerText("available-balance")
    
    const totalNewAvailableBalance = availableBalance - amount;
    setAvailableBalance(totalNewAvailableBalance);
})
// transfer feature 
document.getElementById("send-button").addEventListener('click',function(e){
    e.preventDefault()
   
})
// get bonus feature
document.getElementById("get-bonus-button").addEventListener('click',function(e){
    e.preventDefault()
   
})
// toggling feature
document.getElementById("add-button").addEventListener('click',function(){
    handlerToggle("add-money-parent")
    handleToggleButton("add-button")
})
document.getElementById("cashout-button").addEventListener('click',function(){
    handlerToggle("cash-out-parent")
    handleToggleButton("cashout-button")
})
document.getElementById("transfer-button").addEventListener('click',function(){
   handlerToggle("transfer-money-parent")
   handleToggleButton("transfer-button")
})
document.getElementById("bonus-button").addEventListener('click',function(){
   handlerToggle("get-bonus-parent")
   handleToggleButton("bonus-button")
})
document.getElementById("bill-button").addEventListener('click',function(){
   handlerToggle("pay-bill-parent")
   handleToggleButton("bill-button")
})

