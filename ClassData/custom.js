const addclassbtn = document.querySelector(".addClassbtn");
const classform  = document.querySelector(".addclassform");
const addnewform = document.querySelector(".addnewclass");
const classname = document.querySelector("#clname");
const classid = document.querySelector("#clid");
const mainTable = document.querySelector(".main_table tbody");
const editform = document.querySelector(".editclassform");
const editformclass = document.querySelector(".editclass");
const editName = document.querySelector("#editname");
const editId = document.querySelector("#editid");




const newdata = [{className:"Class1",classId:45,studentno:0,}];

addtableData();



addclassbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    classform.classList.add("clickedvmro");
})

mainTable.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-danger")){
        e.target.parentNode.parentNode.remove();
    }
})

function addtableData(){
    mainTable.innerHTML = ""; 
    for(data of newdata){
        mainTable.innerHTML += `<tr><td>${data.className}</td>
        <td>${data.studentno}</td>
        <td>${data.classId}</td>
        <td><button id="edit" data-id="${data.classId}" class="btn btn-info editbtn">Edit</button></td>
        <td><button id="del" data-id="${data.classId}" class="btn btn-danger delbtn">Delete</button></td></tr>`;
    }
}



addnewform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const namedata =  classname.value;
    const nameid =  classid.value; 
    if(namedata===""||namedata.length<=3){
        classname.style.border = "1px solid red";
        return false;
    }

    if(nameid===""||nameid.length<=5){
        classid.style.border = "1px solid red";
        return false;
    }

    newdata.push({className:namedata,classId:nameid,studentno:0,});
    classname.value = "";
    classid.value = "";  
    addtableData();
    let editbtn = document.querySelectorAll(".editbtn");
    editbtn.forEach(function(elem) {
    elem.addEventListener("click", function(e) {
        const eachid = e.target.getAttribute("data-id");
        const index = newdata.findIndex(object => {
            return object.classId === eachid;
        });
        editName.value = newdata[index].className;
        editId.value = newdata[index].classId;
        editform.classList.add("clickedvmro");
    });
});

});


// function validateform(){
//     for(validate of newdata){
//         if(validate.className===""){
//             return false;       
//         }
//     }
// }


editformclass.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newName = editName.value;
    const newId = editId.value;
    const newindex = newdata.findIndex(object =>{
       return object.classId === newId;
    })
    newdata[newindex].className = newName;
    addtableData();
})