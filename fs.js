const fs = require('fs');

// Leer Archivo
const first_file = fs.readFileSync('./data/first.txt', 'utf-8');
const second_file = fs.readFileSync('./data/second.txt')

console.log(first_file);
console.log(second_file.toString());

// Crear Archivo
fs.writeFileSync('./data/third.txt', 'This is a file created from fs.js');

const title = ' This is a title, and it will be appended to the third file';

fs.writeFileSync('./data/third.txt', title, {
    flag: 'a', // Append 
})

// ASYCN FS

fs.readFile('./data/first.txt', (error, data) => {
    if(error) {
        console.log(error);
    }

    console.log(data.toString());

    fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
        if(error) {
            console.log(error);
        }
    
        console.log(data);
    })
})

console.log('Primer titulo ', first_file);
