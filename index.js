const Employee = require("./employee");
const Intern = require('./intern')
const Engineer = require('./engineer');
const Manager = require('./manager');
const inquirer = require("inquirer");


const getName = () => {
        inquirer
        .prompt([
            {
              type: "input",
              name: "name",
              message: "What is your name?"
            }
          ])
          .then(val => {
              if (val.name) {
                  this.name = val.name
                  console.log(this.name)
                  this.getId()
               
              }
    
    });
}
const employee = new Employee(getName(), getId())
//const employee = new Employee();
employee.getName()
// let  = 

// fs.writeFile('./Output/Team.html', (e) => {
//     e ? console.error(e) : console.log('success')
// })
