console.log("hello world");
// 1 : get the buttom input
document.getElementById("input-btn").addEventListener("click", function(){
// 2 : get the number input 
const inputNumber = document.getElementById("input-number");
const newNumber = inputNumber.value;
console.log(newNumber);


// 3 : get the pin input
const inputPin = document.getElementById("input-pin");
const newPin = inputPin.value;
console.log(newPin);

// 4 : get the number and pin match
if(newNumber=="01701453961" && newPin=="1937"){
    // 5 : condition true 
    alert("login seccess");
    window.location.assign("home.html")
}
// 6 : condition false 
else{
    alert("login failed")
}

})
