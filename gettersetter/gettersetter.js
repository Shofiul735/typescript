var Person = /** @class */ (function () {
    function Person() {
        this.firstName = '';
        this.lastName = '';
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fName", {
        set: function (name) {
            this.firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lName", {
        set: function (name) {
            this.lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.fName = 'Mr. James';
person.lName = 'Hudson';
console.log(person.name);
