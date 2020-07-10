const fs = require('fs')
// const book = {
//   title: '7 Mares',
//   author: 'Tim Maia'
// }
// // fs.writeFileSync('1.json.json', JSON.stringify(book))
// const dataBuffer = fs.readFileSync('1.json.json')
// console.log(dataBuffer);
// console.log(dataBuffer.toString());
const data = fs.readFileSync('1-json.json').toString()
const parsedData = JSON.parse(data)
console.log(parsedData);
parsedData.name = 'Heitor'
parsedData.age = Number(19)
console.log(parsedData);
const stringifyedParsedData = JSON.stringify(parsedData)
console.log(stringifyedParsedData);

fs.writeFileSync('1-json.json', stringifyedParsedData)