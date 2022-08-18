const agreeAll = () => {
  let checkboxAgreeAll = document.getElementById("agreeAll");
  let checkboxAgree1 = document.getElementById("agree1");
  let checkboxAgree2 = document.getElementById("agree2");
  checkboxAgree1.checked = checkboxAgreeAll.checked;
  checkboxAgree2.checked = checkboxAgreeAll.checked;

  checkboxAgree1.disabled = checkboxAgreeAll.checked;
  checkboxAgree2.disabled = checkboxAgreeAll.checked;

  // console.log(checkboxAgreeAll.checked);
};
let checkboxAgreeAll = document.getElementById("agreeAll");
checkboxAgreeAll.addEventListener("change", agreeAll);
// console.log(checkboxAgreeAll);
const validate = (event) => {
  let errorList = document.getElementById("error");
  errorList.innerHTML = "";
  let userName = document.getElementById("name");
  let userEmail = document.getElementById("email");
  let agree1 = document.getElementById("agree1");
  event.preventDefault();
  if (userName.value.trim() == "") {
    let errorCommunicat = document.createElement("li");
    errorCommunicat.innerText = "Wpisz imię i nazwisko";

    errorList.appendChild(errorCommunicat);
  }
  if (!userEmail.value.includes("@")) {
    let errorCommunicat = document.createElement("li");
    errorCommunicat.innerText = "Email musi zawierać @";
    errorList.appendChild(errorCommunicat);
  }
  if (!agree1.checked) {
    let errorCommunicat = document.createElement("li");
    errorCommunicat.innerText = "musisz zaznaczyć zgodę 1";
    errorList.appendChild(errorCommunicat);
  }
};
let formNewsletter = document.getElementById("form");
formNewsletter.addEventListener("submit", validate);
