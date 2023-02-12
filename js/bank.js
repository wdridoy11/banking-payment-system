/*==================================================
               deposit system
  ==================================================*/
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  // get new deposit amount
  let depositInputField = document.getElementById("deposit-field");
  let depositAmountString = depositInputField.value;
  let newDepositAmount = parseFloat(depositAmountString);
  // previous deposit amount
  let depositTotal = document.getElementById("deposit-total");
  let depositTotalString = depositTotal.innerText;
  let previousDepositAmount = parseFloat(depositTotalString);
  // previous deposit amount and new deposit amount adding
  let currentDepositAmount = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = currentDepositAmount;
  // previous balance
  let balanceTotal = document.getElementById("balance-total");
  let balanceTotalString = balanceTotal.innerText;
  let previousBalanceTotal = parseFloat(balanceTotalString);
  // previous balance and new deposit balance adding 
  let currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = currentBalanceTotal;
  // when new deposit amount adding completes then create input field
  depositInputField.value = "";
})
