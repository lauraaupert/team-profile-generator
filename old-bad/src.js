const inquirer = require("inquirer");
const Employee = require("../lib/employee");



class Team {
    constructor(){
        this.employees = [new Employee()];
    }

buildTeam() {
inquirer
.prompt([
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
    .then(val => {
        if (val.name) {
            name = val.name
        }
        if (val.id) {
            id = val.id
        }
        if (val.email) {
            email = val.email
        }
        this.employees.push({name: name, id: id, email: email}),
        console.log(this.employees)
        console.log(new Employee(this.employees[0].name, this.employees[0].id, this.employees[0].email))

    })
// }
//     addTeamMember() {
    }

}

const team = new Team()
team.buildTeam()


