const logoutButton = document.querySelector("#logoutBtn");
const userTitle = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const CuserName = document.querySelector("#cusername");
const CuserId = document.querySelector("#cuserid");
const CuserclName = document.querySelector("#cuserclname");
const CuserclId = document.querySelector("#cuserclid");
const CuserRoll = document.querySelector("#cuserroll");
const CuserMail = document.querySelector("#cusermail");
const tcname = document.querySelector("#Tcname");
const tcemail = document.querySelector("#Tcmail");
const ctName = document.querySelector("#ctname");
const ctId = document.querySelector("#ctid");
const ctClassId = document.querySelector("#ctclid");
const ctEmail = document.querySelector("#ctmail");
const adname = document.querySelector("#adminName");
const admail = document.querySelector("#adminMail");





logoutButton.addEventListener("click", (e) => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "C:/Users/dell/Downloads/practical/classdata/ClassData/login.html";
});

const logInUser = localStorage.getItem("loggedInUser");
if(!logInUser){
  window.location.href = "C:/Users/dell/Downloads/practical/classdata/ClassData/login.html";
}
loadUserDetails();

function loadUserDetails() {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
  //   console.log("Loading user details...", isLoggedIn);
  if (isLoggedIn) {
    if(isLoggedIn.userrole==="teacher"){
      ctName.textContent = isLoggedIn.teachersName;
      ctId.textContent = isLoggedIn.teachersId;
      ctClassId.textContent = isLoggedIn.teachersclId;
      ctEmail.textContent = isLoggedIn.teachersMail;
      tcname.textContent = isLoggedIn.teachersName;
      tcemail.textContent = isLoggedIn.teachersMail;
    }  
    else if(isLoggedIn.userrole==="student"){
      CuserName.textContent = isLoggedIn.stuName;
      CuserId.textContent = isLoggedIn.stuId;
      CuserclName.textContent = isLoggedIn.stuclName;
      CuserclId.textContent = isLoggedIn.stuclId;
      CuserRoll.textContent = isLoggedIn.stuRoll;
      CuserMail.textContent = isLoggedIn.stuMail;
      userTitle.textContent = isLoggedIn.stuName;
      userEmail.textContent = isLoggedIn.stuMail;
    }    
    else if(isLoggedIn.userrole==="admin"){
      adname.textContent = isLoggedIn.adminName;
      admail.textContent = isLoggedIn.adminEmail;
    }
  }
}
