let name=String(prompt("enter your name: "));
let department=String(prompt("enter your department: "));
let rollno=Number(prompt("enter your roll number: "));
let numberofSubjects=Number(prompt("enter number of subjects: "));
let subjects=[];
for(let i=0;i<numberofSubjects;i++){
    marks[i]=Number(prompt("enter marks of subject" + (i+1) + ": "));
}

function Total(marks){
    let total=0;
    for(let i=0;i<marks.length;i++){
        total+=marks[i];
    }
    return total;
}
function Average(Total, numberofSubjects){
    let average=Total/numberofSubjects;
    return average;
}

