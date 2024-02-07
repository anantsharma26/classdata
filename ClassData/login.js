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
  const logInId = loginId.value;
  const logInPswd = loginPswd.value;
  const localstuData = JSON.parse(localStorage.getItem("studentData"));
  let obj = localstuData.find(o => o.stuMail === logInId);
  if(!obj){
    alert("wrong email");
    return 0;
  }
  if(logInPswd != obj.stuPass){
    alert("wrong Password");
    return 0;
  } 
 else{  
  localStorage.setItem(
    "loggedInUser",
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
