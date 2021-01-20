const Employee = require('./employee')

class Manager extends Employee {
    constructor(office, role) {
        super(id, name, email);
        this.office = office;
        this.role = role;
    }

    getOffice(){

    }

    //Must override the Employee getRole()
    getRole(){

    }

}

module.exports = Manager;