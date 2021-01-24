const Employee = require("../lib/employee")
const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    describe("getGithub", () => {
        it("should return github username", () => {
            const test = "MisterPenguin"
            const engineer = new Engineer("Richard", "23", "moon@mask.com", "Engineer", test)
            
            expect(engineer.role).toEqual(test)
        })

    })
    describe("getRole", () => {
        it("should return role as engineer", () => {
            const engineer = new Engineer("Richard", "23", "moon@mask.com", "MisterPenguin", "Engineer")
            
            expect(engineer.role).toEqual("Engineer")
        })

            
        })

    })

