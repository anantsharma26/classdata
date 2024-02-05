const loginform = document.querySelector("#loginform");
function initLogin() {
  const isLoggedIn = localStorage.getItem("loggedInUser");
  console.log("isLoggedIn", isLoggedIn);
  if (isLoggedIn) {
    window.location.href =
      "http://127.0.0.1:5500/classdata/ClassData/index.html";
  }
}

initLogin();
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  //TODO Add check to see if the entered email and password are matching the StudentData in localStorage
  localStorage.setItem(
    "loggedInUser",
    //TODO replace this data with curent logged in user data
    JSON.stringify({
      stuName: "Sukhraj Singh",
      stuId: "123456",
      stuRoll: "387487",
      stuMail: "sukhrajsonu98@gmail.com",
      stuPass: "Sukhraj`@123",
      stuclId: "123456",
    })
  );
  window.location.href = "http://127.0.0.1:5500/classdata/ClassData/index.html";
});
