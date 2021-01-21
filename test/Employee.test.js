const Employee = require("../lib/employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email", () => {
            const employee = new Employee("Max", 720, "penguin@arctic.com")
            
            expect(employee.name).toEqual("Max");
            expect(employee.id).toEqual(720);
            expect(employee.email).toEqual("penguin@arctic.com")
        })

    })
    describe("getId", () => {
        it("", () => {
            
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