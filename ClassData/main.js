const logoutButton = document.querySelector("#logoutBtn");
const userTitle = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");

logoutButton.addEventListener("click", (e) => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "C:/Users/dell/Downloads/practical/classdata/ClassData/login.html";
});
// TODO Add check to redirect user to login page if isLoggedIn is not found in localStorage
// TODO Add user email to the top of page if isLoggedIn
loadUserDetails();

function loadUserDetails() {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
  //   console.log("Loading user details...", isLoggedIn);
  if (isLoggedIn) {
    userTitle.textContent = isLoggedIn.stuName;
    userEmail.textContent = isLoggedIn.stuMail;
  }
}
