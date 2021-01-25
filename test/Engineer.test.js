const Employee = require("../lib/employee")
const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    describe("getGithub", () => {
        it("should return github username", () => {
            const test = "MisterPenguin"
            const engineer = new Engineer("Richard", "23", "moon@mask.com", test, "Engineer")
            
            expect(engineer.getGithub()).toEqual(test)
        })

    })
    describe("getRole", () => {
        it("should return role as engineer", () => {
            const engineer = new Engineer("Richard", "23", "moon@mask.com", "MisterPenguin", "Engineer")
            
            expect(engineer.getRole()).toEqual("Engineer")
        })
    })
})

