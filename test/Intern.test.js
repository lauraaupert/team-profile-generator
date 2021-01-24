const Intern = require('../lib/intern')

describe("Intern", () => {
   describe("getSchool", () => {
        it("should return school name", () => {
            const test = "Mesopotamia"
            const intern = new Intern("Richard", "23", "moon@mask.com", "Intern", test)
            
            expect(intern.role).toEqual(test)
        })


    })
    describe("getRole", () => {
        it("should return role as intern", () => {
            const intern = new Intern("Richard", "23", "moon@mask.com", "MisterPenguin", "Intern")
            
            expect(intern.role).toEqual("Intern")
        })


})

 
})
