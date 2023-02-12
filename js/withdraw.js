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

   // previous balance
   let balanceTotal = document.getElementById("balance-total");
   let balanceTotalString = balanceTotal.innerText;
   let previousBalance = parseFloat(balanceTotalString);

   // previous balance and new withdraw amount subtraction
   let currentBalanceTotal = previousBalance - newWithdrawAmount;
   balanceTotal.innerText = currentBalanceTotal;

   // when withdraw amount adding completes then clear input field
   withdrawField.value = "";
})