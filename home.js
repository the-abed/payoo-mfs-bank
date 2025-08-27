document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank = document.getElementById("bank-select").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-money").value)
    const addMoneyPin = document.getElementById("add-money-pin").value

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    console.log(bank,accountNumber,amount,addMoneyPin);
    
    const totalAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText = totalAvailableBalance;
})
