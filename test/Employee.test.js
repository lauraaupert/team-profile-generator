const Employee = require("../lib/employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, role", () => {
            const employee = new Employee("Max", 720, "penguin@arctic.com", "Manager")
            
            expect(employee.name).toEqual("Max");
            expect(employee.id).toEqual(720);
            expect(employee.email).toEqual("penguin@arctic.com")
            expect(employee.role).toEqual("Manager")

        })

    })
    describe("getId", () => {
        it("should return true if id is a number", () => {
            
            expect().toEqual()
        })

    })
    describe("getEmail", () => {
        it("", () => {
            
            expect().toEqual()
        })

    })
    describe("getRole", () => {
        it("", () => {
            
            expect().toEqual()
        })

    })



})