const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name");
const welcome = document.querySelector("#welcome");
const usernamediv = document.querySelector("#username");
const deslogar = document.querySelector("#deslogar");

function checkUser() {
  const userName = localStorage.getItem("name");

  if (userName) {
    nameForm.style.display = "none";
    welcome.style.display = "block";

    usernamediv.textContent = userName;
  } else {
    nameForm.style.display = "block";
    welcome.style.display = "none";
  }
}

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("name", nameInput.value);

  nameInput.value = "";

  checkUser();
});

deslogar.addEventListener("click", () =>{
    localStorage.removeItem("name")
    checkUser()
})

//applicatiton start
checkUser();
