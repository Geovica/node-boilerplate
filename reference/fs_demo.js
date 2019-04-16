//Core Module File System

const fs = require('fs');
const path = require('path')

// //create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

//Create and Write/Edit to file

fs.writeFile(path.join(__dirname, '/test', 'hello.text'),
    'Hello World',
    (err) => {
        if (err) throw err;
        console.log('Folder written to...');
    });


//Append the file

fs.appendFile(path.join(__dirname, '/test', 'hello.text'),
    'Hello World2',
    (err) => {
        if (err) throw err;
        console.log('Folder written to...');
    });


//Read File
fs.readFile(path.join(__dirname, '/test', 'hello.text'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Rename File

fs.rename(
    path.join(__dirname, '/test', 'hello.text'),
    path.join(__dirname, '/test', 'helloword.txt'),
    err => {
        if (err) throw err;
        console.log('File renamed..');
    }
);

