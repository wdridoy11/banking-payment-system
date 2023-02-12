/*==================================================
               Withdraw system
  ==================================================*/
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
   // get new withdraw amount
   let withdrawField = document.getElementById("withdraw-field");
   let withdrawFieldString = withdrawField.value;
   let newWithdrawAmount = parseFloat(withdrawFieldString);
   // previous withdraw amount
   let withdrawTotal = document.getElementById("withdraw-total");
   let withdrawTotalString = withdrawTotal.innerText;
   let previousWithdrawAmount = parseFloat(withdrawTotalString);
   // new withdraw amount and previous withdraw amount adding
   let currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
   withdrawTotal.innerText = currentWithdrawAmount;
   // when withdraw amount adding completes then clear input field
   withdrawField.value = "";
})