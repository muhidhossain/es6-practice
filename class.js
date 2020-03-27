class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa School"
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "Safat");
const student3 = new Student(29, "Sojib");
console.log(student1, student2, student3);