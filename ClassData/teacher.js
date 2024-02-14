const addteacher = document.querySelector(".addteacherbtn");
const addstudent = document.querySelector(".addstudentbtn");
const teacherform = document.querySelector(".addteacherform");
const addteacherform = document.querySelector(".addnewteacher");
const addnewStudent = document.querySelector(".addnewstudent");
const addstudentform = document.querySelector(".addstudentform");
const teachName = document.querySelector("#teachname");
const teachId = document.querySelector("#teachid");
const teachMail = document.querySelector("#teachmail");
const teachPass = document.querySelector("#teachpswd");
const teachclid = document.querySelector("#teachclassid");
const teachtable = document.querySelector(".teacher_table tbody");
const editteach = document.querySelector(".editteacherform");
const editst = document.querySelector(".editstudentform");
const editstName = document.querySelector("#editstname");
const editstId = document.querySelector("#editstid");
const editstRollNo = document.querySelector("#editstrollno");
const editstEmail = document.querySelector("#editstmail");
const editstPswd = document.querySelector("#editstpswd");
const editstclId = document.querySelector("#editstclassid");
const edtistform = document.querySelector(".editstudent");
const editteachName = document.querySelector("#editteachname");
const editteachId = document.querySelector("#editteachid");
const editteachEmail = document.querySelector("#editteachmail");
const editteachPswd = document.querySelector("#editteachpswd");
const editteachclId = document.querySelector("#editteachclassid");
const edtiteachform = document.querySelector(".editteacher");
const tstudentlist = document.querySelector(".student_list");
const sttable = document.querySelector(".student_table tbody");
const stutable = document.querySelector(".student_table");
const stName = document.querySelector("#stname");
const stId = document.querySelector("#stid");
const stRollNo = document.querySelector("#strollno");
const stMail = document.querySelector("#stmail");
const stPass = document.querySelector("#stpswd");
const stclid = document.querySelector("#stclassid");
const Cldata = document.querySelector(".classData");
const viewClass = document.querySelector("#viewclasses");
const addclassbtn = document.querySelector(".addClassbtn");
const classform = document.querySelector(".addclassform");
const addnewform = document.querySelector(".addnewclass");
const classname = document.querySelector("#clname");
const classid = document.querySelector("#clid");
const mainTable = document.querySelector(".main_table tbody");
const editform = document.querySelector(".editclassform");
const editformclass = document.querySelector(".editclass");
const editName = document.querySelector("#editname");
const editId = document.querySelector("#editid");
const viewTeachers = document.querySelector("#viewteachers");
const teachlists = document.querySelector(".teacherslist");
const userDataList = document.querySelector(".userdata");


const studentData = [];
const UserRole = JSON.parse(localStorage.getItem("loggedInUser"));
const currentUser = UserRole.userrole;

if(currentUser=="student"){
  stutable.classList.add("student");
}
if(currentUser=="teacher"){
  teachlists.classList.add("teacher");
}
if(currentUser=="admin"){
  userDataList.classList.add("hide");
  teachlists.classList.add("clickedvmro");
}



initstudentData();
addStudentData();


function addStudentData() {
  sttable.innerHTML = "";
  const studentArray = JSON.parse(localStorage.getItem("studentData"));
  for (data of studentArray) {
    sttable.innerHTML += `<tr><td>${data.stuName}</td>
        <td>${data.stuId}</td>
        <td>${data.stuRoll}</td>
        <td>${data.stuMail}</td>
        <td>${data.stuPass}</td>
        <td>${data.stuclId}</td>
        <td><button id="stedit" data-id="${data.stuId}" class="btn btn-info steditbtn">Edit</button></td>
        <td><button id="stdel" class="btn btn-danger stdelbtn">Delete</button></td></tr>`;
  }
  const editstbtn = document.querySelectorAll(".steditbtn");
  editstbtn.forEach((e) => {
    e.addEventListener("click", (e) => {
      const currentbtndattid = e.target.getAttribute("data-id");
      const currentsteditbtn = studentArray.findIndex((e) => {
        return e.stuId === currentbtndattid;
      });
      
      editstName.value = studentArray[currentsteditbtn].stuName;
      editstId.value = studentArray[currentsteditbtn].stuId;
      editstRollNo.value = studentArray[currentsteditbtn].stuRoll;
      editstEmail.value = studentArray[currentsteditbtn].stuMail;
      editstPswd.value = studentArray[currentsteditbtn].stuPass;
      editstclId.value = studentArray[currentsteditbtn].stuclId;
    });
  });
}


addstudent.addEventListener("click", (e) => {
  e.preventDefault();
  addstudentform.classList.add("clickedvmro");
});

addnewStudent.addEventListener("submit", (e) => {
  e.preventDefault();
  const studentName = stName.value;
  const studentId = stId.value;
  const studentRoll = stRollNo.value;
  const studentMail = stMail.value;
  const studentPass = stPass.value;
  const stclassID = stclid.value;
  if (studentName === "" || studentName.length <= 3) {
    stName.classList.add("warning");
    return false;
  }
  stName.classList.remove("warning");
  if (studentId === "" || studentId.length <= 5) {
    stId.classList.add("warning");
    return false;
  }
  stId.classList.remove("warning");
  if (studentMail === "") {
    stMail.classList.add("warning");
    return false;
  }
  stMail.classList.remove("warning");
  if (
    studentPass === "" ||
    studentPass.length <= 7 ||
    studentPass.search(/[0-9]/) == -1 ||
    studentPass.search(/[@]/) == -1
  ) {
    stPass.classList.add("warning");
    return false;
  }
  stPass.classList.remove("warning");
  if (stclassID === "" || stclassID.length <= 4) {
    stclid.classList.add("warning");
    return false;
  }
  stclid.classList.remove("warning");
  
  const createStudent = (
    studentName,
    studentId,
    studentRoll,
    studentMail,
    studentPass,
    stclassID
  ) => {
    console.log("createClass");
    const studentArray = JSON.parse(localStorage.getItem("studentData"));
    if (studentArray) {
      studentArray.push({
        stuName: studentName,
        stuId: studentId,
        stuRoll: studentRoll,
        stuMail: studentMail,
        stuPass: studentPass,
        stuclId: stclassID,
      });
      localStorage.setItem("studentData", JSON.stringify(studentArray));
    } else {
      localStorage.setItem(
        "studentData",
        JSON.stringify([
          {
            stuName: studentName,
            stuId: studentId,
            stuRoll: studentRoll,
            stuMail: studentMail,
            stuPass: studentPass,
            stuclId: stclassID,
          },
        ])
      );
    }
  };



  createStudent(
    studentName,
    studentId,
    studentRoll,
    studentMail,
    studentPass,
    stclassID
  );
  addStudentData();
  const steditbtn = document.querySelector(".steditbtn");
  stName.value = "";
  stId.value = "";
  stRollNo.value = "";
  stMail.value = "";
  stPass.value = "";
  stclid.value = "";
});

sttable.addEventListener("click", (e) => {
  if (e.target.classList.contains("stdelbtn")) {
    e.target.parentNode.parentNode.remove();
  }
  if (e.target.classList.contains("steditbtn")) {
    editst.classList.add("clickedvmro");
  }
});


edtistform.addEventListener("submit", (e) => {
  e.preventDefault();
  const studentArray = JSON.parse(localStorage.getItem("studentData"));
  const changingobj = studentArray.findIndex((e) => {
    return e.stuclId === editstclId.value;
  });
  studentArray[changingobj].stuName = editstName.value;
  studentArray[changingobj].stuId = editstId.value;
  studentArray[changingobj].stuRoll = editstRollNo.value;
  studentArray[changingobj].stuMail = editstEmail.value;
  studentArray[changingobj].stuPass = editstPswd.value;
  studentArray[changingobj].stuclId = editstclId.value;
  localStorage.setItem("studentData", JSON.stringify(studentArray));
  addStudentData();
});

function initstudentData() {
  const studentArray = localStorage.getItem("studentData");

  if (!studentArray) localStorage.setItem("studentData", JSON.stringify([]));
}




viewClass.addEventListener("click",()=>{
  Cldata.classList.toggle("clickedvmro");
})
viewTeachers.addEventListener("click",()=>{
  teachlists.classList.toggle("clickedvmro");
})


initClassData();
addtableData();

function initClassData() {
  const classArray = localStorage.getItem("classData");

  if (!classArray) localStorage.setItem("classData", JSON.stringify([]));
}

const createClass = (className, classId, studentno = 0) => {
  console.log("createClass");
  const classArray = JSON.parse(localStorage.getItem("classData"));
  if (classArray) {
    classArray.push({
      className: className,
      classId: classId,
      studentno: studentno,
    });
    localStorage.setItem("classData", JSON.stringify(classArray));
  } else {
    localStorage.setItem(
      "classData",
      JSON.stringify([
        {
          className: className,
          classId: classId,
          studentno: studentno,
        },
      ])
    );
  }
};

addclassbtn.addEventListener("click", (e) => {
  e.preventDefault();
  classform.classList.add("clickedvmro");
});

mainTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    e.target.parentNode.parentNode.remove();
  }
});

function addtableData() {
  mainTable.innerHTML = "";
  const classData = JSON.parse(localStorage.getItem("classData"));
  for (data of classData) {
    mainTable.innerHTML += `<tr><td>${data.className}</td>
        <td>${data.studentno}</td>
        <td>${data.classId}</td>
        <td><button id="edit" data-id="${data.classId}" class="btn btn-info editbtn">Edit</button></td>
        <td><button id="del" data-id="${data.classId}" class="btn btn-danger delbtn">Delete</button></td></tr>`;
  }
  let editbtn = document.querySelectorAll(".editbtn");
  editbtn.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      console.log("Click  edit");
      const eachid = e.target.getAttribute("data-id");
      const classArray = JSON.parse(localStorage.getItem("classData"));
      const index = classArray.findIndex((object) => {
        return object.classId === eachid;
      });
      editName.value = classArray[index].className;
      editId.value = classArray[index].classId;
      localStorage.setItem("classData", JSON.stringify(classArray));

      editform.classList.add("clickedvmro");
    });
  });
}

addnewform.addEventListener("submit", (e) => {
  e.preventDefault();
  const namedata = classname.value;
  const nameid = classid.value;
  if (namedata === "" || namedata.length <= 3) {
    classname.classList.add("warning");
    return false;
  }
  classname.classList.remove("warning");
  if (nameid === "" || nameid.length <= 5) {
    classid.classList.add("warning");
    return false;
  }
  classid.classList.remove("warning");
  //   newdata.push({ className: namedata, classId: nameid, studentno: 0 });
  createClass(namedata, nameid, 0);
  classname.value = "";
  classid.value = "";
  addtableData();
});

editformclass.addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = editName.value;
  const newId = editId.value;
  const classArray = JSON.parse(localStorage.getItem("classData"));
  const newindex = classArray.findIndex((object) => {
    return object.classId === newId;
  });
  classArray[newindex].className = newName;
  localStorage.setItem("classData", JSON.stringify(classArray));
  addtableData();
});











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
  editteachbtn.forEach((e) => {
    e.addEventListener("click", (e) => {
      const currentbtnattid = e.target.getAttribute("data-id");
      const currentteacheditbtn = teacherArray.findIndex((e) => {
        return e.teachersId === currentbtnattid;
      });
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