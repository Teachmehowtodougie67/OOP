console.log('object oriented programming')

//const stefania = {name:"stefania", surname: "dagnino", marks:[10, 9, 8, 7, 7]};
const stefania = new student("stefania", "dagnino",[10, 9, 8, 7, 7] )

//const leonardo = {name:"leonardo", surname: "silvia", marks:[5, 6, 4, 5, 3]};
const leonardo = new student ("leonardo","silva", [5, 6, 4, 5, 3]);

// function calculateStudentMean(student){

//     let sum = 0;

//     for (let i = 0; i < student.marks.length; i++) {
//         const mark = student.marks[i];

//         sum += mark;

        
//     }

//     const mean = sum / student.marks.length;
//     return mean;

// }

// console.log(calculateStudentMean(stefania));
// console.log(calculateStudentMean(leonardo));

console.log(leonardo.calculateMean());
console.log(stefania.calculateMean());



function addMark(student, mark) {

if (mark >= 0 && mark <=10) {
    student.mark.push(newMark);

    
} else{
    console.log,('errore,voto non valido');
}

    
}

addMark(stefania, 10);
console.log(calculateStudentMean(stefania));


addMark(leonardo, 20);
console.log(calculateStudentMean(leonardo));


function creaScheda(studente){

const scheda = "name:" + student.name + "\n" +
               "surname: " + student.surname + "\n" +
               "media" + calculateStudentMean(student)

               return scheda;

}

console.log(creaScheda(stefania));
console.log(creaScheda(leonardo));