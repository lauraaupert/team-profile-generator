const Employee = require("./lib/employee");
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const inquirer = require("inquirer");

var team = []


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
        },
        {
        type: "input",
        name: "name",
        message: "What is your name?"
        },           
        {
        type: "input",
        name: "id",
        message: "What is your ID number?"
        },
        {
        type: "input",
        name: "email",
        message: "What is your email address?"
        }
    ])
    .then((response) => {
        switch (response.type) {
            case "Manager":
                inquirer
                .prompt([
                  {
                    type: "input",
                    name: "office",
                    message: "What is your office number?"
                  }
                ])
                .then((val) => {
                  //const office = val.office;
                  //console.log(officeNum);
                  const manager = new Manager(
                    response.name,
                    response.id,
                    response.email,
                    val.office,
                    response.type
                  );                    
                 console.log(manager)
                  })
                break;
    
            case "Intern":
                    inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "school",
                            message: "What school do you attend?"
                          }
                    ])
                    .then((val) => {
                      //const office = val.office;
                      //console.log(officeNum);
                      const intern = new Intern(
                        response.name,
                        response.id,
                        response.email,
                        val.school,
                        response.type
                      );                    
                     console.log(intern)
                    })
                    break;
                }
            })
        }
                      
    


    // function addMember() {
    //     inquirer
    //         .prompt([
                
    //         ])

    // }



    //         switch (response.type) {

    //             case "Manager":
    //                 inquirer
    //                 .prompt([
    //                   {
    //                     type: "input",
    //                     message: "Enter employee ID: ",
    //                     name: "id"
    //                   },
    //                   {
    //                     type: "input",
    //                     message: "Enter office number: ",
    //                     name: "office"
    //                   }
    //                 ])
    //                 .then(function(res) {
    //                   const officeNum = res.office;
    //                   console.log(officeNum);
    //                   const manager = new Manager(
    //                     data.name,
    //                     res.id,
    //                     data.email,
    //                     officeNum,
    //                     "Manager"
    //                   );                    //employee.inquire()   
    //                  employee.push() 
    //                 break;
    
    //     }

   //     if ()
            //  case "Engineer":
            //     const employee = new Employee()              
            //     break;
            // case "Intern":
            //     const employee = new Employee()              
            //     break;
    
    //         case "No more team members, enough humans":
    //             this.quit();
          
    
    // } 
    //   }).then(() => {team.push(employee) 
    //     console.log("team" + team)    
   
   
    
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
