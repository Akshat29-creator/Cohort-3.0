const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject(err.message); // ✅ Pass the real error message
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log("File content:\n" + data);
}

function onError(err) {
  console.log("Error: " + err);
}

// ✅ Use correct path — make sure hi.txt exists in the same folder
readFilePromisified(__dirname + "/hi.txt")
  .then(onDone)
  .catch(onError);
