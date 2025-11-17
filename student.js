class student{

    constructor(name, surname, marks){
          this.name = name;
          this.surname = surname;
          this.marks = marks;
    }

    calculateMean() {
           let sum = 0;

    for (let i = 0; i < this.marks.length; i++) {
        const mark = this.marks[i];

        sum += mark;

        
    }

    const mean = sum / this.marks.length;
    return mean;
    }

   

}