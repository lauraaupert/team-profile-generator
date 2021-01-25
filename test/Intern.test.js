const Intern = require('../lib/intern')

describe("Intern", () => {
   describe("getSchool", () => {
        it("should return school name", () => {
            const test = "Mesopotamia"
            const intern = new Intern("Richard", "23", "moon@mask.com", test, "Intern")
            
            expect(intern.getSchool()).toEqual(test)
        })
    })
    describe("getRole", () => {
        it("should return role as intern", () => {
            const intern = new Intern("Richard", "23", "moon@mask.com", "Mesopotamia", "Intern")
            
            expect(intern.getRole()).toEqual("Intern")
        })
    })
})
