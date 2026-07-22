let students = [
    {
        name:"Rahul",
        roll:"101",
        branch:"CSE"
    },
    {
        name:"Avishi",
        roll:"102",
        branch:"Data Science"
    },
    {
        name:"Roshni",
        roll:"103",
        branch:"AIML"
    }   ,
    {
        name:"Yash",
        roll:"104",
        branch:"IT"
    },
    {       
        name:"Anay",
        roll:"105",
        branch:"CSE"
    }, 
    {
        name:"Kashish",
        roll:"106",
        branch:"Data Science"
    }
];

function showStudents(){

    let table=document.getElementById("table");
    table.innerHTML="";

    let search=document.getElementById("search").value.toLowerCase();
    let filter=document.getElementById("filter").value;

    let count=0;

    for(let i=0;i<students.length;i++){

        if(students[i].name.toLowerCase().includes(search) &&
        (filter=="All" || students[i].branch==filter)){

            count++;

            table.innerHTML+=`
            <tr>
            <td>${students[i].name}</td>
            <td>${students[i].roll}</td>
            <td>${students[i].branch}</td>
            <td><button onclick="deleteStudent(${i})">Delete</button></td>
            </tr>
            `;
        }
    }

    document.getElementById("total").innerHTML=count;

    if(count==0){
        document.getElementById("message").innerHTML="No Record Found";
    }
    else{
        document.getElementById("message").innerHTML="";
    }
}

function addStudent(){

    let name=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    let branch=document.getElementById("branch").value;

    if(name=="" || roll=="" || branch==""){
        alert("Fill all fields");
        return;
    }

    students.push({
        name:name,
        roll:roll,
        branch:branch
    });

    document.getElementById("name").value="";
    document.getElementById("roll").value="";
    document.getElementById("branch").value="";

    showStudents();
}

function deleteStudent(index){

    students.splice(index,1);

    showStudents();
}

showStudents();