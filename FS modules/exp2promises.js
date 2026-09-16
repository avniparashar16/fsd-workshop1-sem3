const fs = require('fs').promises; // or ("fs/promises") in node v18 and above
//write/create
async function writeFile() {
    try {
        await fs.writeFile('promise.txt', 'Hello! we are learning Node.js!. This is Exp-2 , Part C.', 'utf-8');
        console.log('File is created successfully!');
    } 
    catch (err) {
        console.log("file is having an error while creating",err);
    }
}
writeFile();

//read file

async function readFile() {
    try {
        const data = await fs.readFile('promise.txt', 'utf-8');
        console.log("file content :");
        console.log(data);
    } 
    catch (err) {
        console.log("file is having a reading error",err); // or console.error(err);
    }
}
readFile();

//append file
async function appendFile(){
    try {
        await fs.appendFile('promise.txt', '\nThese are appended lines. We have added new lines to this code.', 'utf-8');
        console.log('File is  appended successfully!');
    } 
    catch (err) {
        console.log("file is having an appending error",err);
    }
}
appendFile();
 //rename
 async function renameFile(){
    try {
        await fs.rename('promise.txt', 'promise_new.txt');
        console.log('File is renamed successfully!');
    } 
    catch (err) {
        console.log("file is having a renaming error",err);
    }
}
renameFile();

 //delete
 async function deleteFile(){
    try {
        await fs.unlink('del.txt');
        console.log('File is deleted successfully!');
    } 
    catch (err) {
        console.log("file is having a deleting error",err);
    }
}
deleteFile();
