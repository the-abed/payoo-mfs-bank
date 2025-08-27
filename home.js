//add money feature
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank = document.getElementById("bank-select").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-money").value)
    const addMoneyPin = parseInt(document.getElementById("add-money-pin").value)
    const validPin = 1234;
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
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
    document.getElementById("available-balance").innerText = totalAvailableBalance;
})
// toggling feature
document.getElementById("add-button").addEventListener('click',function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cashout-button").addEventListener('click',function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
    
})
//cashout feature
document.getElementById("withdraw-button").addEventListener('click',function(e){
    e.preventDefault()
    
    const amount = parseInt(document.getElementById("withdraw-money").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    const totalNewAvailableBalance = availableBalance - amount;

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
})
