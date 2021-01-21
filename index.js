const Employee = require("./lib/employee");
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const inquirer = require("inquirer");


// const getName = () => {
//         inquirer
//         .prompt([
//             {
//               type: "input",
//               name: "name",
//               message: "What is your name?"
//             }
//           ])
//           .then(val => {
//               if (val.name) {
//                   this.name = val.name
//                   console.log(this.name)
//                   this.getId()
               
//               }
    
//     });
// }
const employee = new Employee()
const intern = new Intern()
employee.getName()
console.log(employee)
// var id = employee.getId()
// var email = employee.getEmail()
// employee.printInfo()
// //
//const employee = new Employee();
// employee.getName()
// let  = 

// fs.writeFile('./Output/Team.html', (e) => {
//     e ? console.error(e) : console.log('success')
// })
