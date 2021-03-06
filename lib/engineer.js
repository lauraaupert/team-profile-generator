const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, particular, role) {
        super(name, id, email, role);
        this.particular = particular;
        this.role = role;
    }
    getGithub(){
        return this.particular;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Engineer;