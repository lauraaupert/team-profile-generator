const Employee = require("../lib/employee")

describe("Employee", () => {
    describe("Object", () => {
        it("should create an object with name, id, email, role", () => {
            const employee = new Employee("Max", "720", "penguin@arctic.com", "")
            
            expect(typeof employee).toBe("object");
            expect(employee.name).toEqual("Max");
            expect(employee.id).toEqual("720");
            expect(employee.email).toEqual("penguin@arctic.com")
            expect(employee.role).toEqual("Employee")
        })
    })
    describe("Constructor", () => {

        it("should set name, id, email, role through constructor", () => {
            const name = "Max"
            const id = "720";
            const email = "penguin@arctic.com";
            const role = "Manager"
            const employee = new Employee(name, id, email, role)
            
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email)
            expect(employee.role).toEqual(role)
        })
    })

    describe("getName", () => {
        it("should get name through method getName", () => {
            const test = "Cunegonde"
            const employee = new Employee(test)
            expect(employee.getName()).toEqual(test)
        })
    })

    describe("getId", () => {
        it("should return true if id is a number", () => {
            const employee = new Employee("Max", "720", "penguin@arctic.com", "")
            expect(employee.getId()).toMatch(/[0-9]+/)
        })
        it("should get id through method getId", () => {
            const test = "720"
            const employee = new Employee("Max", test)
            expect(employee.getId()).toEqual(test)
        })
    })

    describe("getEmail", () => {
        it("should get email through method getEmail", () => {
            const test = "penguin@arctic.com"
            const employee = new Employee("Arthur", "800", test)

            expect(employee.getEmail()).toEqual(test)
        })
    })
    describe("getRole", () => {
        it("should get role through method getRole", () => {
            const test = "Manager"
            const employee = new Employee("Arthur", "800", "penguin@arctic.com", test)

            expect(employee.getRole()).toEqual(test)
        })
        it("should set role as employee through method getRole if role is blank", () => {
            const test = ""
            const employee = new Employee("Arthur", "800", "penguin@arctic.com", test)

            expect(employee.getRole()).toEqual("Employee")
        })
    })
})
