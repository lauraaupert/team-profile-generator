const Employee = require('./employee')

class Intern extends Employee {
    constructor(school, role) {
        super(id, name, email);
        this.school = school;
        this.role = role;
    }

    getSchool(){

    }

    //Must override the Employee getRole()
    getRole(){

    }

}

module.exports = Intern;