const method = require('./generateHTML')
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer")


var pdf = require('html-pdf');
// var html = fs.readFileSync('./test/businesscard.html', 'utf8');
var options = { format: 'Letter' };
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your gitHub Username?"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green","pink","blue","red"]

    },
    

];

// console.log(newPage)
inquirer
    .prompt(questions)
    .then(function({color,name}){
        const newPage = method.generateHTML(color)
        // console.log(newPage)
        axios
        .get( `https://api.github.com/users/${name}`)
        .then(({data})=> console.log(data))
        
    })
   
  




function writeToFile(fileName, data) {

}

function init() {

    init();}
