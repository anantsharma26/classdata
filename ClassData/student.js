const addstudent = document.querySelector(".addstudentbtn");
const studentform  = document.querySelector(".addstudentform");
const addstudentform = document.querySelector(".addnewstudent");
const stName = document.querySelector("#stname");
const stId = document.querySelector("#stid");
const stRollNo = document.querySelector("#strollno");
const stMail = document.querySelector("#stmail");
const stPass = document.querySelector("#stpswd");
const stclid = document.querySelector("#stclassid");
const sttable = document.querySelector(".student_table tbody");
const editst = document.querySelector(".editstudentform");
const editstName = document.querySelector("#editstname");
const editstId = document.querySelector("#editstid");
const editstRollNo = document.querySelector("#editstrollno");
const editstEmail = document.querySelector("#editstmail");
const editstPswd = document.querySelector("#editstpswd");
const editstclId = document.querySelector("#editstclassid");
const edtistform = document.querySelector(".editstudent");

const studentData = [];

addstudent.addEventListener("click",(e)=>{
    e.preventDefault();
    studentform.classList.add("clickedvmro");
})


addstudentform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const studentName = stName.value;
    const studentId = stId.value;
    const studentRoll = stRollNo.value;
    const studentMail = stMail.value;
    const studentPass = stPass.value;
    const stclassID = stclid.value;
    if(studentName === "" || studentName.length <= 3){
        stName.classList.add("warning");
        return false;
    }
    stName.classList.remove("warning");
    if(studentId === "" || studentId.length <= 5){
        stId.classList.add("warning");
        return false;
    }
    stId.classList.remove("warning");
    if(studentMail === ""){
        stMail.classList.add("warning");
        return false;
    }
    stMail.classList.remove("warning");
    if(studentPass === "" || studentPass.length <= 7 || studentPass.search(/[0-9]/) == -1 || 
    studentPass.search(/[@]/) == -1 ){
        stPass.classList.add("warning");
        return false;
    }
    stPass.classList.remove("warning");
    if(stclassID === "" || stclassID.length <= 4){
        stclid.classList.add("warning");
        return false;
    }
    stclid.classList.remove("warning");
    studentData.push({stuName:studentName,stuId:studentId,
        stuRoll:studentRoll,stuMail:studentMail,stuPass:studentPass,
        stuclId:stclassID});   
    addStudentData();  
    const steditbtn = document.querySelector(".steditbtn");   
    stName.value = "";
    stId.value = "";
    stRollNo.value = "";
    stMail.value = "";
    stPass.value = "";
    stclid.value = "";
    const editstbtn = document.querySelectorAll(".steditbtn");
    editstbtn.forEach((e)=>{
        e.addEventListener("click",(e)=>{
            const currentbtndattid = e.target.getAttribute("data-id");
            const currentsteditbtn = studentData.findIndex((e)=>{
              return e.stuId === currentbtndattid;
            }) 
            editstName.value = studentData[currentsteditbtn].stuName;       
            editstId.value = studentData[currentsteditbtn].stuId;       
            editstRollNo.value = studentData[currentsteditbtn].stuRoll;       
            editstEmail.value = studentData[currentsteditbtn].stuMail;       
            editstPswd.value = studentData[currentsteditbtn].stuPass;       
            editstclId.value = studentData[currentsteditbtn].stuclId;       
        })
    })
    
});


function addStudentData(){
    sttable.innerHTML = "";
    for(data of studentData){
        sttable.innerHTML += `<tr><td>${data.stuName}</td>
        <td>${data.stuId}</td>
        <td>${data.stuRoll}</td>
        <td>${data.stuMail}</td>
        <td>${data.stuPass}</td>
        <td>${data.stuclId}</td>
        <td><button id="stedit" data-id="${data.stuId}" class="btn btn-info steditbtn">Edit</button></td>
        <td><button id="stdel" class="btn btn-danger stdelbtn">Delete</button></td></tr>`
    } 
}


sttable.addEventListener("click",(e)=>{
    if(e.target.classList.contains("stdelbtn")){
        e.target.parentNode.parentNode.remove();
    }
    if(e.target.classList.contains("steditbtn")){
        editst.classList.add("clickedvmro");
    }
})


edtistform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const changingobj = studentData.findIndex((e)=>{
        return e.stuclId === editstclId.value;
    })
    studentData[changingobj].stuName = editstName.value;
    studentData[changingobj].stuId = editstId.value;
    studentData[changingobj].stuRoll = editstRollNo.value;
    studentData[changingobj].stuMail = editstEmail.value;
    studentData[changingobj].stuPass = editstPswd.value;
    studentData[changingobj].stuclId = editstclId.value;
    addStudentData();
})