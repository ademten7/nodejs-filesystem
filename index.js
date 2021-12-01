#! /usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

// STEP 1: to add package.json
// exec("npm init -y", (err, stdout, errorbycommand) => {
//   if (err) {
//     throw new Error("error from npm init -y");
//   }
// });

//                                        Not worked
// fs.appendFileSync(
//   "./package.json",
//   `,
// "bin":{
//     "adem":"./index.js"
// },`
// );

//STEP :2 add new folder
// fs.mkdirSync("./new folder");

//STEP :3 create a File and add data into that file
// fs.writeFileSync("./new_folder/test1.js", `console.log("test1")`);

//STEP :4 add more data into a file
// fs.appendFileSync(
//   "./new_folder/test1.js",
//   `
// export function sum(a,b){
//     return a+b;
// }`
// );
//STEP :5 create another js  file  and ad some data
// fs.writeFileSync(
//   "./test2.js",
//   `export function multiply(a,b){
//     return a*b;
// }`
// );

//STEP 6: read data from test2.js and create a new file than pass this read data to new file
// let data = fs.readFileSync("./test2.js", "utf8");
// fs.writeFileSync(".App.js", data);

//STEP: 7 Rename file
// fs.renameSync("./test2.js", "rename.js");

//STEP: 8 add a new file and data to new_folder and delete test1.js
// fs.writeFileSync(
//   "./new_folder/extra.js",
//   `export function division(a,b){
//     return a/b;
// }`
// );
// fs.unlinkSync("./new_folder/test1.js");

//STEP:STREAM
// let readStream = fs.createReadStream("./App.js");
// let writeStream = fs.createWriteStream("./stream.js");
// readStream.pipe(writeStream);

//delete .App.js and stream.js
// fs.unlinkSync("./.App.js");

// fs.unlinkSync("./stream.js");

//create again App.js and stream.js(use stream)
// let data = fs.readFileSync("./new_folder/extra.js");
// fs.writeFileSync("./Add.js", data);

// fs.appendFileSync(
//   "./App.js",
//   `
// export function module(a,b){
//     return a%b;
// }
// `
// );
// let readStream = fs.createReadStream("./App.js");
// let writeStream = fs.createWriteStream("./stream.js");
// readStream.pipe(writeStream);

// exec("git init", (err, stdout, stderror) => {
//   if (err) {
//     throw new Error("error from git init");
//   }
// });
// let remoteLink =
//   "git remote add origin git@github.com:ademten7/nodejs-filesystem.git";
// exec(remoteLink, (err, stdout2, stderror2) => {
//   if (err) {
//     throw new Error("error from remoteLink");
//   }
// });

const [message, branchName] = process.argv.slice(2);
if (message && branchName) {
  exec("git add .", (err, stdout, errorbycommand) => {
    if (err) {
      throw new Error("something is wrong");
    }
    exec(`git commit -m "${message}"`, (err, stdout2, errorbycommand) => {
      if (stdout2) {
        console.log(stdout2);
      } else {
        if (err) {
          console.log(stdout2);
          throw new Error("something is wrong");
        }
      }

      console.log(errorbycommand);
      exec(`git push  origin ${branchName}`, (err, stdout, errorbycommand) => {
        if (err) {
          throw new Error("something is wrong");
        }
        console.log("successfully pushed your code to github");
        console.log(stdout);
      });
    });
  });
} else {
  console.log("please provide message and branch name");
}
