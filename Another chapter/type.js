//array
var arr = ['Arial', 'Moth', 'Silli', 'Kate'];
arr.push('Sam');
arr.push('May');
arr[0] = 'Someke';
//objects
var names = {
    name: 'Kelly',
    surn: 'Molly',
    age: 23
};
//array of objects
names =
    {
        name: 'Simon',
        surn: 'Mole',
        age: 20
    };
names.age = 30;
names.name = 'Solly';
names.surn = 'Kobe';
console.log(arr);
//console.log(names.name);
//explicit types
var nms = 'jdvfak.ksdjb';
var nums = 30;
var isTrue = false;
//explicit array
var arrNames = ['name1', 'name2', 'name3'];
console.log(arrNames);
//union array
var mixed = ['hkd,nkj', 54, 9, 'ghysx,cgj'];
mixed.push('ghdkytufgh');
console.log(mixed[4]);
//explicit object
var cat;
cat = {
    cName: 'pineaple',
    cage: 5,
    cAtt: 'blackFur'
};
console.log(cat);
var cat2;
cat2 = {
    cName: 'cupcake',
    cage: 3,
    cAtt: 'yellowFur'
};
console.log(cat2);
//function
var add = function (a, b) {
    console.log(a + b);
};
add(5, 8);
//function signatures
var person;
person = function (p1, age) {
    console.log("".concat(p1, " and ").concat(age));
};
// person('Elsie',23);
var addition;
addition = function (x, y, z) {
    if (z == true) {
        return x + y;
    }
    else {
        return x - y;
    }
};
var personalDetails;
/*personalDetails=(objDetails:thisObjec)=>
{
   console.log(`${objDetails.n} and ${objDetails.sn}`);
}*/
//classes
var student = /** @class */ (function () {
    function student(stdno, studname, studc) {
        this.studentNo = stdno;
        this.studentName = studname;
        this.studentCourse = studc;
    }
    student.prototype.format = function () {
        return "the following student no ".concat(this.studentNo, " with the name ").concat(this.studentName, " is enroled in ").concat(this.studentCourse);
    };
    return student;
}());
var stud1 = new student(216802977, 'Elsie', 'compt syst eng');
var stud2 = new student(218609279, 'Miles', 'info tech');
var students = [];
students.push(stud1);
students.push(stud2);
console.log(students);
students.forEach(function (studs) {
    console.log(/*studs.studentNo,studs.studentName,studs.studentCourse,*/ studs.format());
});
var ani = {
    animalType: 'Cheetah',
    skinType: 'Fur',
    animalAge: 4,
    animalSound: function (aniSound) {
        console.log(aniSound);
    }
};
console.log(ani);
