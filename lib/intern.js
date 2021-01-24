const Employee = require('./employee')
const inquirer = require('inquirer')


class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email);
        this.school = school;
        this.role = role;
    };

    
    // getSchool(){
    //     inquirer
    //     .prompt([
    //         {
    //           type: "input",
    //           name: "school",
    //           message: "What school do you attend?"
    //         }
    //     ])
    //     .then(val => {
    //         if (val.school) {
    //             this.school = val.school
    //             console.log(this.school)

    //         }
    //     });
    // }
    }


    







module.exports = Intern;