const loginform = document.querySelector("#loginform");
const loginId = document.querySelector("#loginid");
const loginPswd = document.querySelector("#loginpswd");

function initLogin() {
  const isLoggedIn = localStorage.getItem("loggedInUser");
  console.log("isLoggedIn", isLoggedIn);
  if (isLoggedIn) {
    window.location.href =
      "C:/Users/dell/Downloads/practical/classdata/ClassData/index.html";
  }
}

initLogin();
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  //TODO Add check to see if the entered email and password are matching the StudentData in localStorage
  const logInId = loginId.value;
  const logInPswd = loginPswd.value;
  const localstuData = JSON.parse(localStorage.getItem("studentData"));
  let obj = localstuData.find(o => o.stuMail === logInId);
  if(logInId != obj.stuMail){
    alert("wrong email");
  }
  if(logInPswd != obj.stuPass){
    alert("wrong Password");
  } 
 else{  
  localStorage.setItem(
    "loggedInUser",
    //TODO replace this data with curent logged in user data
    JSON.stringify({
      stuName: obj.stuName,
      stuId: obj.stuId,
      stuRoll: obj.stuRoll,
      stuMail: obj.stuMail,
      stuPass: obj.stuPass,
      stuclId: obj.stuclId,
    })
  );
  }
  window.location.href = "C:/Users/dell/Downloads/practical/classdata/ClassData/index.html";
});
