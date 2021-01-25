const Manager = require('../lib/manager')

describe("Manager", () => {
    describe("getOffice", () => {
        it("should return office number", () => {
            const test = "7"
            const manager = new Manager("Richard", "23", "moon@mask.com", test, "Manager")
            
            expect(manager.getOffice()).toEqual(test)
        })
    
    })
    describe("getRole", () => {
        it("should return role as manager", () => {
            const manager = new Manager("Richard", "23", "moon@mask.com", "7", "Manager")
            
            expect(manager.getRole()).toEqual("Manager")
        })


    })

})
