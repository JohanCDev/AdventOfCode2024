const fs = require('fs');


const getLists = () => {
    const data = fs.readFileSync('./input.txt', 'utf8');
    const left = [];
    const right = [];
    data.split('\n').forEach((line, index) => {
        lines = line.split('   ');
        left.push(lines[0]);
        right.push(lines[1]);
    })

    return { left, right };
}

const main = () => {
    let { left, right } = getLists();
    let res = 0;

    // 1st solution
    // for (let i = 0; i < left.length; i++) {
    //     if (left[i] !== right[i]) {
    //         res += Math.abs(left[i] - right[i]);
    //     }
    // }

    // 2nd solution
    for (let i = 0; i < left.length; i++) {
        res += left[i] * right.filter((item) => item === left[i]).length;
    }

    console.log(res)
}

main();