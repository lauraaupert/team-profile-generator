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
                this.getEmail()

                //this.getEmail()
            }
        });
    }

    getEmail(){
        inquirer
        .prompt([
            {
              type: "input",
              name: "email",
              message: "What is your email address?"
            }
        ])
        .then(val => {
            if (val.email) {
                this.email = val.email
                this.printInfo()

                //this.getEmail()
            }
        });


    }
    printInfo(){
        console.log(new Employee(this.name, this.id, this.email))
        console.log(`Name: ${this.name}, ID: ${this.id}, email: ${this.email}`)
    }

    getRole(){

    };

}
//const employee = new Employee().printInfo()
//employee.printInfo()

module.exports = Employee;