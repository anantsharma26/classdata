const addteacher = document.querySelector(".addteacherbtn");
const teacherform = document.querySelector(".addteacherform");
const addteacherform = document.querySelector(".addnewteacher");
const teachName = document.querySelector("#teachname");
const teachId = document.querySelector("#teachid");
const teachMail = document.querySelector("#teachmail");
const teachPass = document.querySelector("#teachpswd");
const teachclid = document.querySelector("#teachclassid");
const teachtable = document.querySelector(".teacher_table tbody");
const editteach = document.querySelector(".editteacherform");
const editteachName = document.querySelector("#editteachname");
const editteachId = document.querySelector("#editteachid");
const editteachEmail = document.querySelector("#editteachmail");
const editteachPswd = document.querySelector("#editteachpswd");
const editteachclId = document.querySelector("#editteachclassid");
const edtiteachform = document.querySelector(".editteacher");

const teacherData = [];

initteacherData();
addteacherData();

function initteacherData() {
  const teacherArray = localStorage.getItem("teacherData");

  if (!teacherArray) localStorage.setItem("teacherData", JSON.stringify([]));
}

const createteacher = (
  teacherName,
  teacherId,
  teacherMail,
  teacherPass,
  teachclassID
) => {
  const teacherArray = JSON.parse(localStorage.getItem("teacherData"));
  if (teacherArray) {
    teacherArray.push({
      teachersName: teacherName,
      teachersId: teacherId,
      teachersMail: teacherMail,
      teachersPass: teacherPass,
      teachersclId: teachclassID,
    });
    localStorage.setItem("teacherData", JSON.stringify(teacherArray));
  } else {
    localStorage.setItem(
      "teacherData",
      JSON.stringify([
        {
          teachersName: teacherName,
          teachersId: teacherId,
          teachersMail: teacherMail,
          teachersPass: teacherPass,
          teachersclId: teachclassID,
        },
      ])
    );
  }
};

addteacher.addEventListener("click", (e) => {
  e.preventDefault();
  teacherform.classList.add("clickedvmro");
});

addteacherform.addEventListener("submit", (e) => {
  e.preventDefault();
  const teacherName = teachName.value;
  const teacherId = teachId.value;
  const teacherMail = teachMail.value;
  const teacherPass = teachPass.value;
  const teachclassID = teachclid.value;
  if (teacherName === "" || teacherName.length <= 3) {
    teachName.classList.add("warning");
    return false;
  }
  teachName.classList.remove("warning");
  if (teacherId === "" || teacherId.length <= 5) {
    teachId.classList.add("warning");
    return false;
  }
  teachId.classList.remove("warning");
  if (teacherMail === "") {
    teachMail.classList.add("warning");
    return false;
  }
  teachMail.classList.remove("warning");
  if (
    teacherPass === "" ||
    teacherPass.length <= 7 ||
    teacherPass.search(/[0-9]/) == -1 ||
    teacherPass.search(/[@]/) == -1
  ) {
    teachPass.classList.add("warning");
    return false;
  }
  teachPass.classList.remove("warning");
  if (teachclassID === "" || teachclassID.length <= 4) {
    teachclid.classList.add("warning");
    return false;
  }
  teachclid.classList.remove("warning");
  //   teacherData.push({
  //     stuName: teacherName,
  //     stuId: teacherId,
  //     stuMail: teacherMail,
  //     stuPass: teacherPass,
  //     stuclId: stclassID,
  //   });
  createteacher(
    teacherName,
    teacherId,
    teacherMail,
    teacherPass,
    teachclassID
  );
  addteacherData();
  const teacheditbtn = document.querySelector(".teacheditbtn");
  teachName.value = "";
  teachId.value = "";
  teachMail.value = "";
  teachPass.value = "";
  teachclid.value = "";
});

function addteacherData() {
  teachtable.innerHTML = "";
  const teacherArray = JSON.parse(localStorage.getItem("teacherData"));
  for (data of teacherArray) {
    teachtable.innerHTML += `<tr><td>${data.teachersName}</td>
        <td>${data.teachersId}</td>
        <td>${data.teachersMail}</td>
        <td>${data.teachersPass}</td>
        <td>${data.teachersclId}</td>
        <td><button id="teachedit" data-id="${data.teachersId}" class="btn btn-info teacheditbtn">Edit</button></td>
        <td><button id="teachdel" class="btn btn-danger teachdelbtn">Delete</button></td></tr>`;
  }
  const editteachbtn = document.querySelectorAll(".teacheditbtn");
  console.log("teacher:editteachbtn", teacherArray);
  editteachbtn.forEach((e) => {
    e.addEventListener("click", (e) => {
      const currentbtnattid = e.target.getAttribute("data-id");
      const currentteacheditbtn = teacherArray.findIndex((e) => {
        return e.teachersId === currentbtnattid;
      });
      console.log("teacher", currentteacheditbtn);
      editteachName.value = teacherArray[currentteacheditbtn].teachersName;
      editteachId.value = teacherArray[currentteacheditbtn].teachersId;
      editteachEmail.value = teacherArray[currentteacheditbtn].teachersMail;
      editteachPswd.value = teacherArray[currentteacheditbtn].teachersPass;
      editteachclId.value = teacherArray[currentteacheditbtn].teachersclId;
    });
  });
}

teachtable.addEventListener("click", (e) => {
  if (e.target.classList.contains("teachdelbtn")) {
    e.target.parentNode.parentNode.remove();
  }
  if (e.target.classList.contains("teacheditbtn")) {
    editteach.classList.add("clickedvmro");
  }
});

edtiteachform.addEventListener("submit", (e) => {
  e.preventDefault();
  const teacherArray = JSON.parse(localStorage.getItem("teacherData"));
  const changingobjs = teacherArray.findIndex((e) => {
    return e.teachersclId === editteachclId.value;
  });
  teacherArray[changingobjs].teachersName = editteachName.value;
  teacherArray[changingobjs].teachersId = editteachId.value;
  teacherArray[changingobjs].teachersMail = editteachEmail.value;
  teacherArray[changingobjs].teachersPass = editteachPswd.value;
  teacherArray[changingobjs].teachersclId = editteachclId.value;
  localStorage.setItem("teacherData", JSON.stringify(teacherArray));
  addteacherData();
});
