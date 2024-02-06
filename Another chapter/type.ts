//array
let arr=['Arial','Moth','Silli','Kate'];
 arr.push('Sam');
 arr.push('May');
 arr[0]='Someke';

//objects
 let names={
    name:'Kelly',
    surn:'Molly',
    age:23
 };
 //array of objects
 names=
 {
    name:'Simon',
    surn:'Mole',
    age:20
 };
 names.age=30;
 names.name='Solly';
 names.surn='Kobe';

 console.log(arr);
 //console.log(names.name);

 //explicit types

 let nms:string='jdvfak.ksdjb';
 let nums:number=30;
 let isTrue:boolean=false;

 //explicit array

 let arrNames:string[]=['name1','name2','name3'];
 console.log(arrNames);

 //union array

 let mixed:(string|number)[]=['hkd,nkj',54,9,'ghysx,cgj'];
 mixed.push('ghdkytufgh');
 console.log(mixed[4]);

 //explicit object

 let cat:object;
 cat={
    cName:'pineaple',
    cage:5,
    cAtt:'blackFur'
 };
console.log(cat);

 let cat2:
 {
    cName:string,
    cage:number,
    cAtt:string
 }
 cat2={
    cName:'cupcake',
    cage:3,
    cAtt:'yellowFur'
 };
 console.log(cat2);
//function
 const add=(a:number, b:number)=>{

  console.log(a+b); 
 }
 add(5,8);

 //function signatures
 let person:(pers:string, ag:number)=>void;

    person=(p1:string,age:number)=>{
        console.log(`${p1} and ${age}`);

    }
   // person('Elsie',23);

    
 let addition:(a:number,b:number,c:boolean)=>number;
 addition=(x:number,y:number,z:boolean)=>
 {
if(z==true)
{
    return x+y;
}else{
    return x-y;
}
 }

 let personalDetails:(details:{nm:string, surn:string})=>void;
 //type
 type thisObjec={n:string,sn:string};

 /*personalDetails=(objDetails:thisObjec)=>
 {
    console.log(`${objDetails.n} and ${objDetails.sn}`);
 }*/

 //classes

 class student{
    studentNo:number;
    studentName:string;
    studentCourse:string;

    constructor(stdno:number,studname:string,studc:string)
    {
        this.studentNo=stdno;
        this.studentName=studname;
        this.studentCourse=studc;
    }
    format()
    {
        return `the following student no ${this.studentNo} with the name ${this.studentName} is enroled in ${this.studentCourse}`;

    }
 }
 const stud1=new student(216802977,'Elsie','compt syst eng');
 const stud2=new student(218609279,'Miles','info tech');

 let students:student[]=[];
 students.push(stud1);
 students.push(stud2);

 console.log(students);
  students.forEach(studs => {
    console.log(/*studs.studentNo,studs.studentName,studs.studentCourse,*/studs.format())
  });

//interfaces

interface isAnimal{
    animalType:string;
    skinType:string;
    animalAge:number;
    animalSound(sound:string):void;
}
 const ani:isAnimal={
    animalType:'Cheetah',
    skinType:'Fur',
    animalAge: 4,
    animalSound(aniSound:string):void
    {
      console.log(aniSound)
    }
 };
 console.log(ani);
