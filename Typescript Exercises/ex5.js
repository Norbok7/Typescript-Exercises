//Objective: Create a class named Student in TypeScript. The class should define certain properties and methods.
var Student = /** @class */ (function () {
    function Student(studentName, studentAge, studentGrade) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }
    Student.prototype.displayInfo = function () {
        console.log(student);
    };
    Student.prototype.isPassing = function (gradeThreshold) {
        return this.studentGrade >= gradeThreshold;
    };
    return Student;
}());
;
var student = new Student('garrett', 32, 75);
student.displayInfo();
student.isPassing(student.studentGrade);
//having trouble compiling
