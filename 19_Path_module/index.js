const path = require("node:path");

console.log("path = ", path);

console.log("__filename = ", __filename);
console.log("__dirname = ", __dirname);

console.log("path.basename(__filename) = ", path.basename(__filename));
console.log("path.basename(__dirname) = ", path.basename(__dirname));

console.log("path.extname(__filename) = ", path.extname(__filename));
console.log("path.extname(__dirname) = ", path.extname(__dirname));

console.log("path.parse(__filename) = ", path.parse(__filename));
console.log("path.parse(__dirname) = ", path.parse(__dirname));

console.log(
  "path.format(path.parse(__filename)) = ",
  path.format(path.parse(__filename)),
);
console.log(
  "path.format(path.parse(__dirname)) = ",
  path.format(path.parse(__dirname)),
);

console.log("path.isAbsolute(__filename) = ", path.isAbsolute(__filename));
console.log("path.isAbsolute(__dirname) = ", path.isAbsolute(__dirname));

console.log(
  "path.isAbsolute('./data.json') = ",
  path.isAbsolute("./data.json"),
);

console.log(
  "path.join('folder1', 'folder2', 'index.html') = ",
  path.join("folder1", "folder2", "index.html"),
);
console.log(
  "path.join('/folder1', 'folder2', 'index.html') = ",
  path.join("/folder1", "folder2", "index.html"),
);

console.log(
  "path.resolve('folder1', 'folder2', 'index.html') = ",
  path.resolve("folder1", "folder2", "index.html"),
);
console.log(
  "path.resolve('/folder1', 'folder2', 'index.html') = ",
  path.resolve("/folder1", "folder2", "index.html"),
);
