const fs = require('fs');


const getDataParsed = () => {
    const data = fs.readFileSync('./input.txt', 'utf8');


    return data;
}

const main = () => {
    let data = getDataParsed();
    let res = 0;

    console.log(data.length)
}

main();