const loginform = document.querySelector("#loginform");
const loginId = document.querySelector("#loginid");
const loginPswd = document.querySelector("#loginpswd");

function initLogin() {
  const isLoggedIn = localStorage.getItem("loggedInUser");
  // console.log("isLoggedIn", isLoggedIn);
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
  const adminuser = "user@admin";
  const adminpass = "bakabaka";
  const localstuData = JSON.parse(localStorage.getItem("studentData"));
  const localteachersData = JSON.parse(localStorage.getItem("teacherData"));
  let obj = localstuData.find(o => o.stuMail === logInId);
  let teachobj = localteachersData.find(o => o.teachersMail === logInId);

  if(!obj && !teachobj && logInId!=adminuser){
    alert("wrong email");
    return 0;
  }

  if(logInId==adminuser){
    if(logInPswd!=adminpass){
      alert("wrong password");
      return 0;
    }
    else{
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          adminName: "admin",
          adminEmail: adminuser,
          userrole:"admin",
        })
      );    
      window.location.href = "C:/Users/dell/Downloads/practical/classdata/ClassData/admin.html";
    }
  }

  if(teachobj){
    if(logInPswd !== teachobj.teachersPass){
      alert("wrong Password");
      return 0;
    }
    else{
      localStorage.setItem(
            "loggedInUser",
            JSON.stringify({
              teachersName: teachobj.teachersName,
              teachersId: teachobj.teachersId,
              teachersMail: teachobj.teachersMail,
              teachersPass: teachobj.teachersPass,
              teachersclId: teachobj.teachersclId,
              userrole:"teacher",
            })
          );    
          window.location.href = "C:/Users/dell/Downloads/practical/classdata/ClassData/teacherdash.html";
    }
  }
  if(obj){
    if(logInPswd !== obj.stuPass){
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
              userrole:"student",
            })
          );    
          window.location.href = "C:/Users/dell/Downloads/practical/classdata/ClassData/studentdash.html";
    }
  }
});