//Objective: Create a class named Student in TypeScript. The class should define certain properties and methods.


class Student {
  studentName: string;
  studentAge: number;
  studentGrade: number;

  constructor (studentName: string, studentAge: number, studentGrade: number){
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.studentGrade = studentGrade;
  }

displayInfo(): void{
  console.log(student);
}

isPassing(gradeThreshold: number): boolean {
  return this.studentGrade >= gradeThreshold;}
};



const student = new Student('garrett', 32, 75)

student.displayInfo();

student.isPassing(student.studentGrade);



//having trouble compiling
