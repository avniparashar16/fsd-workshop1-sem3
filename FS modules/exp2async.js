const fs = require('fs');
fs.writeFile('asyncfile.txt', 'Hello! we are learning Node.js!. This is Exp-2. Part B.', 'utf-8', (err) => 
    {
    if(err){
        console.log("file is creating error",err);
    }
    else{
        console.log('File is created successfully!');
    }
});
fs.readFile('asyncfile.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("file is reading error",err);
        return;
    }
    else{
        console.log("file content :" , data);
    }
});
fs.appendFile('asyncfile.txt', ' This is the new line addes to the file. We have added a new lines to this code.', 'utf-8', (err) => {
    if(err){
        console.log("file is appending error",err);
        return;
    }
    else{
        console.log('File is  appended successfully!');
    }
});
fs.readFile('asyncfile.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("file is reading error",err);
        return;
    }
    else{
        console.log("file content :" , data);
    }
});
fs.unlink('raw.txt', (err) => {
    if(err){
        console.log("file is deleting error",err);
        return;
    }
    else{
        console.log('File is deleted successfully!');
    }
});