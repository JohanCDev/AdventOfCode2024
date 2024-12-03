const fs = require('fs');

const getSumForValues = (data) => {
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const matches = [];
    let match;

    while ((match = regex.exec(data)) !== null) {
        matches.push({ X: match[1], Y: match[2] });
    }

    return matches.reduce((acc, match) => acc + match.X * match.Y, 0);
}

const getDataParsed = () => {
    const data = fs.readFileSync('./input.txt', 'utf8');

    return data;
}
const main = () => {
    let data = getDataParsed();

    // First part
    // console.log(getSumForValues(data))

    const doinstructions = data.split('do()')
    let res = 0

    doinstructions.map((instruction) => {
        const instructionWithoutDont = instruction.split("don't()")[0]
        res += getSumForValues(instructionWithoutDont)
    })

    console.log(res)
}

main();