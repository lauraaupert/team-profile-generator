const Employee = require("./lib/employee");
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const inquirer = require("inquirer");

var team = []

src.buildTeam()

//need to push to team array from employee class? from somewhere else

function initialize() {
inquirer
    .prompt([
        {
        type: "rawlist",
        name: "type",
        message: "Do you wish to add a new team member?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members, enough humans"
            ]
        }
    ]
    )
    .then((response) => {

   //     if ()
        switch (response.type) {

            case "Manager":
                const employee = new Employee()
                //employee.inquire()   
                 employee.push() 
                break;
            //  case "Engineer":
            //     const employee = new Employee()              
            //     break;
            // case "Intern":
            //     const employee = new Employee()              
            //     break;
    
            case "No more team members, enough humans":
                this.quit();
          
    
    } 
    //   }).then(() => {team.push(employee) 
    //     console.log("team" + team)    
    })
    
    } 
   
    
    // quit() {
    //     console.log("\nAsk for cats next time!!");
    //     process.exit(0);

    // function add() {team.push(employee)
    //     console.log(team)
    //    }

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
initialize()
//Employee.prototype.Intern()
//const employee = new Employee()
// const intern = new Intern()
// intern.newEmployee()
// intern.getSchool()

//employee.inquire()
//console.log(employee)
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
