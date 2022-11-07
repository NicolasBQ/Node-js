const {readFile} = require('fs');

const getText = (pathFile) => {
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            } 

            resolve(data)
        })
    })
}

// getText('./data/first.txt')
//     .then((result) => console.log(result))
//     .then(() => getText('./data/second.txt'))
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));


read_file = async () => {
    try {
        // throw new Error('Error insesperado');
        const result1 = await getText('./data/first.txt');
        const result2 = await getText('./data/second.txt');
        const result3 = await getText('./data/third.txt');
    
        console.log(result1);
        console.log(result2);
        console.log(result3);
    }
    catch(err) {
        console.log(err);
    }
}

read_file();