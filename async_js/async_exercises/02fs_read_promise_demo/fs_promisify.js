const fs = require('fs');

// fs.readFile('./haiku1.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log("Error!", err);
//   } else {
//     console.log('Haiku 1');
//     console.log(data);
//   }
// });

function asyncReadFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

// asyncReadFile("./haiku1.txt")
//   .then(data => {
//     console.log("Haiku #1");
//     console.log(data);
//     return asyncReadFile("./haiku1.txt");
//   })
//   .then((data) => {
//     console.log("Haiku #2");
//     console.log(data);
//     return asyncReadFile("./haiku2.txt");
//   })
//   .then((data) => {
//     console.log("Haiku #3");
//     console.log(data);
//     return asyncReadFile("./haiku3.txt")
//   })
//   .catch(err => {
//     console.log("Error!", err)
//   })

async function getHaikus() {
  try {
    const haiku1 = await asyncReadFile("./haiku1.txt");
    console.log("Haiku #1");
    console.log(haiku1);
    const haiku2 = await asyncReadFile("./haiku2.txt");
    console.log("Haiku #2");
    console.log(haiku2);
    const haiku3 = await asyncReadFile("./haiku3.txt");
    console.log("Haiku #3");
    console.log(haiku3);
  } catch (error) {
    console.log("Error!", error);
  }
}

getHaikus();