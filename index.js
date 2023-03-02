const emailverification = document.querySelector(".input");
const submit = document.querySelector(".submit");
const error = document.getElementById("matter");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailverification.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    error.innerText = "please Enter your Email Id";
  } else if (regex.test(email)) {
    error.style.color = "green";
    error.innerHTML = "very good my son";
  } else {
    error.innerText = "pleasse Enter valid Email Id";
  }
});
