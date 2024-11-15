class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

class Student extends User {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }

    enroll() {
        console.log(`Student ${this.name} has enrolled.`);
    }
}

class Instructor extends User {
    constructor(name, email, instructorId) {
        super(name, email);
        this.instructorId = instructorId;
    }

    assignGrade() {
        console.log(`Instructor ${this.name} assigned a grade.`);
    }
}

// Creating instances and calling methods
const student1 = new Student("Alice", "alice@example.com", "S123");
const instructor1 = new Instructor("Bob", "bob@example.com", "I456");

student1.getDetails(); // Output: Name: Alice, Email: alice@example.com
student1.enroll(); // Output: Student Alice has enrolled.

instructor1.getDetails(); // Output: Name: Bob, Email: bob@example.com
instructor1.assignGrade(); // Output: Instructor Bob assigned a grade.