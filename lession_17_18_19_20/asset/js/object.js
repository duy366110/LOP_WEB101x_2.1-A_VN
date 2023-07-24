window.onload = function(event) {

    let student = {
        firstName: 'Nguyen',
        lastName: 'Van A',
        age: 20,

        infor: function() {
            console.log(this);

            console.log(`Person information:
            first name: ${this.firstName}
            last name : ${this.lastName}
            age       : ${this.age}
            `)
        }
    }

    student['student_class'] = '12A2';

    console.log(student.firstName);
    console.log(student['student_class']);
    student.infor();

    function person (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        this.infor = () => {
            console.log(this);
            console.log(`Person information:
            first name: ${this.firstName}
            last name : ${this.lastName}
            age       : ${this.age}
            address   : ${this.address}
            `)
        }
    }

    person.prototype.address = 'Not Address';
    person.prototype.show = function() {
        console.log(this.address);
    }

    let person_01 = new person('Nguyen', 'Van B', 30);
    person_01.address = 'TP HCM';
    person_01.infor();

    let person_02 = new person('Nguyen', 'Van C', 45);
    person_02.infor();
    person_02.show();


}