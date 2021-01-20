const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    inquire(){
        
    }

    getName(){
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
    


    getId(){
        inquirer
        .prompt([
            {
              type: "input",
              name: "id",
              message: "What is your ID number?"
            }
        ])
        .then(val => {
            if (val.id) {
                this.id = val.id
                console.log(this.id)

                //this.getEmail()
            }
        });
    }

    getEmail(){

    }
    printInfo(){
        console.log(`Name: ${this.name}, ID: ${this.id}`)
    }

    getRole(){

    }
}

const employee = new Employee()
employee.printInfo()

module.exports = Employee;