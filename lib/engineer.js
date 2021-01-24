const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email, role);
        this.github = github;
        this.role = role;
    }
    
    getGithub(){
        return this.github;
    }

    //Must override the Employee getRole()
    getRole(){
        return this
    }
}

module.exports = Engineer;