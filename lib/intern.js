const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, particular, role) {
        super(name, id, email, role);
        this.particular = particular;
        this.role = role;
    }
    getSchool() {
        return this.particular;
    }
    getRole(){
        return this.role;
    }
}


module.exports = Intern;