const fs = require('fs');
fs.writeFileSync('syncfile.txt', 'Hello! we are learning Node.js!. This is Exp-2.' , 'utf-8');
console.log('File is created successfully!');

// const fs= require('fs');
const data = fs.readFileSync('syncfile.txt', 'utf-8');
console.log(data); //readFileSync is a synchronous method that reads data from a file. It takes two arguments: the name of the file and the encoding format. It returns the contents of the file as a string. If the file does not exist, it will throw an error.

// const fs = require('fs');
fs.appendFileSync('syncfile.txt', ' This is the new line addes to the file.', 'utf-8');
console.log('File is  appended successfully!');

// fs.unlinkSync('example.txt');
// console.log('File is deleted successfully!'); //unlinkSync is a synchronous method that deletes a file. It takes one argument: the name of the file to be deleted. If the file does not exist, it will throw an error.



// //create folder
// const fs = require('fs');

//fs.mkdirSync('newfolder');
//console.log('New folder is created successfully!');

// fs.rmdirSync('newfolder');
// console.log('Folder is deleted successfully!');

if(fs.existsSync('syncfile.txt')){
    console.log('File already exists!');
}
else{
    console.log('File is not found');
}

