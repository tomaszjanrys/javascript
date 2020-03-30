let countryCode = new Set();
countryCode.add('DE');
countryCode.add('PL');
countryCode.add('RU');
countryCode.add('RO');
countryCode.add('USA');
let id = 1;
console.log("==================")
for (let code of countryCode) {
    console.log("ID :" + id + "=>" + code);
    id++;
}
console.log("==================");

let countryAndCode = new Map();
countryAndCode.set('Germany', 'DE');
countryAndCode.set('Poland', 'PL');
countryAndCode.set('Russia', 'RU');
countryAndCode.set('Romania', 'RO');
countryAndCode.set('America', 'USA');
for (let country of countryAndCode.keys()) {
    console.log(country + ": " + countryAndCode.get(country));
}
console.log("==================");

getFunction = (countryCode, countryAndCode) => {
    let results = new Map()
    for (let country of countryAndCode.keys()) {
        let code = countryAndCode.get(country)
        if (countryCode.has(code)) {
            let codeId = 1
            for (c of countryCode) {
                if (c == code) {
                    results.set(country, codeId)
                    break
                }
                codeId++
            }
        }
    }
    return results
}
let results = getFunction(countryCode, countryAndCode);
for (let country of results.keys()) {
    console.log(country + " : " + results.get(country));

}
console.log("==================");
