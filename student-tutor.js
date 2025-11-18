class studentTutor extends student {

    constructor(name, surname, marks, student) {
        this.name = name;
        this.surname = surname;
        this.marks = marks;
        this.student = student;



    }

   calculateMean(){

    const actualMean = super.calculateMean();
    const studentTutor = this.student.calculateMean();

    let newMean;

    if (studentTutor >= 6) { 
        newMean = actualMean + 1;
        
    } else {

    newMean = actualMean;

    }

    return newMean;
    
   }



}
 






