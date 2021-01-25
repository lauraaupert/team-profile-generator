const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, particular, role) {
        super(name, id, email, role);
        this.particular = particular;
        this.role = role;
    }
    getOffice(){
        return this.particular;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Manager;