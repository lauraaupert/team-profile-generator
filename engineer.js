const Employee = require('./employee')

class Engineer extends Employee {
    constructor(github, role) {
        super(id, name, email);
        this.github = github;
        this.role = role;
    }
    
    getGithub(){

    }

    //Must override the Employee getRole()
    getRole(){

    }
}

module.exports = Engineer;