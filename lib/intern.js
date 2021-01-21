const Employee = require('./lib/employee')

class Intern extends Employee {
    constructor(school, role) {
        const emp = new Employee();
        //emp.getName()
        super( emp.name,emp.id, emp.email);
        this.school = school;
        this.role = role;
    };
    
    getSchool(){
        inquirer
        .prompt([
            {
              type: "input",
              name: "school",
              message: "What school do you attend?"
            }
        ])
        .then(val => {
            if (val.school) {
                this.school = val.school
                console.log(this.school)

                //this.getEmail()
            }
        });
    }


    

    //Must override the Employee getRole()
    getRole(){

    }

}



module.exports = Intern;