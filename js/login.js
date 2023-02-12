/*==================================================
               Login system
  ==================================================*/
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
   // user input value
   let userEmail = document.getElementById("user-email");
   let userEmailValue = userEmail.value;
   let userPassword = document.getElementById("user-password");
   let userPasswordValue = userPassword.value;
   // user input validation check valid user
   if (userEmailValue === "wdridoy11@gmail.com") {
      window.location.href = "../index.html";
   } else {
      alert("Please send valid information. Please try again");
   }
})