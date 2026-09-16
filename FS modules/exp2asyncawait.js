const fs= require('fs').promises;

async function  WriteFile() {
    try {
        await fs.writeFile('asyncawait.txt', 'Hello! we are learning Node.js!. This is Exp-2 , Part D.', 'utf-8');
        console.log('File is created successfully!');
    }
    catch (err) {
        console.log("file is having an error while creating",err);
    }   
}
WriteFile();