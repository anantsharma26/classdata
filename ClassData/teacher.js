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

const createTeacher = (
  teacherName,
  teacherId,
  teacherMail,
  teacherPass,
  teachclassId
) => {
  const teacherArray = JSON.parse(localStorage.getItem("teacherData"));
  if (teacherArray) {
    teacherArray.push({
      tecname: teacherName,
      tecid: teacherId,
      tecmail: teacherMail,
      tecpass: teacherPass,
      tecclid: teachclassId,
    });
    localStorage.setItem("teacherData", JSON.stringify(teacherArray));
  } else {
    localStorage.setItem(
      "teacherData",
      JSON.stringify([
        {
          tecname: teacherName,
          tecid: teacherId,
          tecmail: teacherMail,
          tecpass: teacherPass,
          tecclid: teachclassId,
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
  const teachclassId = teachclid.value;
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
  if (teachclassId === "" || teachclassId.length <= 4) {
    teachclid.classList.add("warning");
    return false;
  }
  teachclid.classList.remove("warning");
  //   teacherData.push({
  //     teachName: teacherName,
  //     teachId: teacherId,
  //     teachMail: teacherMail,
  //     teachPass: teacherPass,
  //     teachclId: teachclassId,
  //   });
  createTeacher(
    teacherName,
    teacherId,
    teacherMail,
    teacherPass,
    teachclassId
  );
  addteacherData();
  const teacheditbtn = document.querySelector(".teacheditbtn");
  teachName.value = "";
  teachId.value = "";
  teachMail.value = "";
  teachPass.value = "";
  teachclid.value = "";
  const editteachbtn = document.querySelectorAll(".teacheditbtn");
  editteachbtn.forEach((e) => {
    e.addEventListener("click", (e) => {
      const teachcurrentbtnid = e.target.getAttribute("data-id");
      const teacherArray = JSON.parse(localStorage.getItem("teacherData"));
      const currentteacheditbtn = teacherArray.findIndex((e) => {
        return e.tecid === teachcurrentbtnid;
      });
      editteachName.value = teacherArray[currentteacheditbtn].tecname;
      editteachId.value = teacherArray[currentteacheditbtn].tecid;
      editteachEmail.value = teacherArray[currentteacheditbtn].tecmail;
      editteachPswd.value = teacherArray[currentteacheditbtn].tecpass;
      editteachclId.value = teacherArray[currentteacheditbtn].tecclid;
    });
  });
});

function addteacherData() {
  teachtable.innerHTML = "";
  const teacherArray = JSON.parse(localStorage.getItem("teacherData"));
  for (data of teacherArray) {
    teachtable.innerHTML += `<tr><td>${data.tecname}</td>
        <td>${data.tecid}</td>
        <td>${data.tecmail}</td>
        <td>${data.tecpass}</td>
        <td>${data.tecclid}</td>
        <td><button id="teachedit" data-id="${data.tecid}" class="btn btn-info teacheditbtn">Edit</button></td>
        <td><button id="teachdel" class="btn btn-danger teachdelbtn">Delete</button></td></tr>`;
  }
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
  const Tchangingobj = teacherArray.findIndex((e) => {
    return e.tecclid === editteachclId.value;
  });
  teacherArray[Tchangingobj].tecname = editteachName.value;
  teacherArray[Tchangingobj].tecid = editteachId.value;
  teacherArray[Tchangingobj].tecmail = editteachEmail.value;
  teacherArray[Tchangingobj].tecpass = editteachPswd.value;
  teacherArray[Tchangingobj].tecclid = editteachclId.value;
  localStorage.setItem("teacherData", JSON.stringify(teacherArray));
  addteacherData();
});
