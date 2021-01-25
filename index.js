const Employee = require("./lib/employee");
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const inquirer = require("inquirer");
const fs = require("fs")

var team = []

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
        name: "particular",
        message: "What is the manager's office number?",
        validate: function(input) {
            if (isNaN(input)) {
                return "This must be a number."
            }
            return true
        }
        },
    ])
        .then((response) => {
            const manager = new Manager(
                response.name,
                response.id,
                response.email,
                response.particular,
                "Manager"
                );                    
            console.log(manager)
            team.push(manager)
            oneMore()
        })            
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
            console.log(loop())    
            createCards()    
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
                    name: "particular",
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
                    const engineer = new Engineer(
                        response.name,
                        response.id,
                        response.email,
                        "https://github.com/" + val.particular,
                        response.type
                    );                    
                    team.push(engineer)
                    oneMore()
                })
                break;
    
            case "Intern":
                inquirer
                    .prompt([
                        {
                        type: "input",
                        name: "particular",
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
                      const intern = new Intern(
                        response.name,
                        response.id,
                        response.email,
                        val.particular,
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




const loop = () => {
    var cards = []
    for (i = 0; i < team.length; i++) {
        
    var bodyHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title" id="name">${team[i].name}</h4>
      <h5 class="card-text" id="role">${team[i].role}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="id">${team[i].id}</li>
      <li class="list-group-item" id="email">${team[i].email}</li>
      <li class="list-group-item" id="particular">${team[i].particular}</li>
    </ul>
  </div>
  `
//console.log(bodyHTML)
cards.push(bodyHTML)
console.log(cards)
}
return cards


    }

    



 

const createHTML = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <title>Team</title>
</head>
    `
}
const endHTML =() => {
    return `
    </body>
</html>
    `
}

function createCards() {
    let html =  createHTML() + loop() + endHTML()

    fs.writeFile('./dist/team.html', html, (e) => {
        e ? console.error(e) : console.log('success')
    })
}

                      
    
initialize()


{/* <div class="card-body">
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>
</div> */}
