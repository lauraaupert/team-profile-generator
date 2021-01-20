const Employee = require('./employee')

class Manager extends Employee {
    constructor(office) {
        super(id, name, email);
        this.office = office;
    }
}

module.exports = Manager;