const fs = require('fs');


const getDataParsed = () => {
    const data = fs.readFileSync('./input.txt', 'utf8');
    const reports = data.split('\n');

    return reports;
}

const performCheck = (levels) => {
    let increase = null
    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] < levels[i + 1]) {
            if (increase === false) {
                return false
            }
            increase = true
        } else {
            if (increase === true) {
                return false
            }
            increase = false
        }

        const diff = Math.abs(levels[i] - levels[i + 1])

        if (diff < 1 || diff > 3) {
            return false
        }
    }
    return true
}

const main = () => {
    let reports = getDataParsed();

    const nbSafe = reports.map((report) => {
        let baselevels = report.split(' ').map((level) => parseInt(level))
        let safe = null
        let removeIndex = -1
        while (safe !== true && removeIndex < baselevels.length) {
            let levels = [...baselevels]
            if (removeIndex !== -1) {
                levels = levels.filter((_, index) => index !== removeIndex);
            }
            console.log(levels)
            safe = performCheck(levels)
            removeIndex++
        }
        return safe
    }).filter((safe) => safe === true).length

    console.log(nbSafe)
}

main();