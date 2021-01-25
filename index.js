const Employee = require("./lib/employee");
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const inquirer = require("inquirer");

var team = []


//need to push to team array from employee class? from somewhere else

function initialize() {
    addManager()
}

function addManager() {
    inquirer
    .prompt([
        {        
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: function(name) {
            if (name === "") {
                return "You must enter a name."
            } 
            return true
        }

        },
        {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
        validate: function(input) {
            if (isNaN(input)) {
                return "ID must be a number."
            }
            return true
        }
            
            
        },

        
        {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        validate: function(email) {
            var re = /\S+@\S+\.\S+/
            if (re.test(email) === true) {
                return true
            }
                return "Please enter a valid email address."    
        }
        },
        {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
        validate: function(input) {
            if (isNaN(input)) {
                return "This must be a number."
            }
            return true
        }

        },
        // {
        // type: "rawlist",
        // name: "addMember",
        // message: "Do you wish to add a new team member?",
        // choices: [
        //     "Yes",
        //     "No",
        //     ]
        // }
    ])
        .then((response) => {
            const manager = new Manager(
                response.name,
                response.id,
                response.email,
                response.office,
                "Manager"
                );                    
            console.log(manager)
            team.push(manager)
            // if (response.addMember === "Yes") {
            //     addMember()
            // }
            oneMore()
        })
        //.then(addMember())
            
}

function oneMore() {
    inquirer
    .prompt([
        {
        type: "rawlist",
        name: "addMember",
        message: "Do you wish to add a new team member?",
        choices: [
            "Yes",
            "No",
            ]
        }
    ]).then((response) => {
        if (response.addMember === "Yes") {
            addMember()
        } else {
            console.log(team)
        }

    })
}



     

function addMember() {
inquirer
    .prompt([
        {
        type: "rawlist",
        name: "type",
        message: "What is the role of the new team member?",
        choices: [
            "Engineer",
            "Intern",
            ]
        },
        {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: function(name) {
            if (name === "") {
                return "You must enter a name."
            } 
            return true
        }
        },           
        {
        type: "input",
        name: "id",
        message: "What is this employee's ID number?",
        validate: function(input) {
            if (isNaN(input)) {
                return "ID must be a number."
            }
            return true
        }
        },
        {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
        validate: function(email) {
            var re = /\S+@\S+\.\S+/
            if (re.test(email) === true) {
                return true
            }
                return "Please enter a valid email address."    
        }

    
        },
    ])
    .then((response) => {
        switch (response.type) {
            case "Engineer":
                inquirer
                .prompt([
                  {
                    type: "input",
                    name: "github",
                    message: "What is the Engineer's Github username?",
                    validate: function(github) {
                        if (github === "") {
                            return "You must enter a username."
                        } 
                        return true
                    }
            
                  }
                ])
                .then((val) => {
                  //const office = val.office;
                  //console.log(officeNum);
                  const engineer = new Engineer(
                    response.name,
                    response.id,
                    response.email,
                    val.github,
                    response.type
                  );                    
                 console.log(engineer)
                 team.push(engineer)
                 oneMore()
                 })
                
    
            
                break;
    
            case "Intern":
                    inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "school",
                            message: "What school do you attend?",
                            validate: function(school) {
                                if (school === "") {
                                    return "You must enter a school."
                                } 
                                return true
                            }
                    
                          }
                    ])
                    .then((val) => {
                      //const office = val.office;
                      //console.log(officeNum);
                      const intern = new Intern(
                        response.name,
                        response.id,
                        response.email,
                        val.school,
                        response.type
                      );                    
                     console.log(intern)
                     team.push(intern)
                        oneMore()
                    })
                    
                    break;
                }

            })
            
        }
                      
    
initialize()

// "https://github.com/" + employee.github