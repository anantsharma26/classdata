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

const newdata = [{ className: "Class1", classId: 45, studentno: 0 }];

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
  console.log("classData: ", classData);
  for (data of classData) {
    mainTable.innerHTML += `<tr><td>${data.className}</td>
        <td>${data.studentno}</td>
        <td>${data.classId}</td>
        <td><button id="edit" data-id="${data.classId}" class="btn btn-info editbtn">Edit</button></td>
        <td><button id="del" data-id="${data.classId}" class="btn btn-danger delbtn">Delete</button></td></tr>`;
  }
  let editbtn = document.querySelectorAll(".editbtn");
  editbtn.forEach(function (elem) {
    console.log("Click pre edit");
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

// function validateform(){
//     for(validate of newdata){
//         if(validate.className===""){
//             return false;
//         }
//     }
// }

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
