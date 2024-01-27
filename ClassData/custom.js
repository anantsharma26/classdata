const addclassbtn = document.querySelector(".addClassbtn");
const classform  = document.querySelector(".addclassform");
const addnewform = document.querySelector(".addnewclass");
const classname = document.querySelector("#clname");
const classid = document.querySelector("#clid");
const mainTable = document.querySelector(".main_table tbody");
const newdata = [];

addclassbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    classform.classList.add("clickedvmro");
})

addnewform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const namedata =  classname.value;
    const nameid =  classid.value;
    newdata.push({className:namedata,classId:nameid,studentno:0});
    classname.value = "";
    classid.value = "";
    mainTable.innerHTML = `<td>${newdata.className}</td>
    <td>${newdata.studentno}</td>
    <td>${newdata.classId}</td>
    <td><button id="edit" class="btn btn-info">Edit</button></td>
    <td><button id="del" class="btn btn-danger">Delete</button></td>`;
})

