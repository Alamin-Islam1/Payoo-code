
document.getElementById("input-btn").addEventListener("click", function(){
// 1 : get the agent number &validate 
const inputAgent = document.getElementById("input-agent");
const newAgent = inputAgent.value ;
console.log(newAgent);
if(newAgent.length !=11){
    alert("Invalid Agent number");
    return;
}

// 2 : get the amount , validate ,convert to number
const inputAmount = document.getElementById("input-amount");
const newAmount = inputAmount.value ;
console.log(newAmount);

// 3 : get the urrent Balance , validate ,convert to number
const inputBalance = document.getElementById("balance");
const balance = inputBalance.innerText ;
console.log(balance);

// 4 : Calculate new Balance
const newBalance = Number(balance) - Number(newAmount) ;
if(newBalance < 0){
    alert("Invalid Amount")
    return;
}


//5 : Get the pin and verify 
const inputPassword = document.getElementById("input-password");
const pin = inputPassword.value ;
if(pin ==="1937"){

    // 5-1 : true :: show an alert > set Balance
    alert("cashout successfull");
    console.log("new balance", newBalance);
    
    inputBalance.innerText =newBalance ; 
}else{

    // 5-2 true :: show anerror alert > return
    alert("Invalid pin");
    return;
}

    
})