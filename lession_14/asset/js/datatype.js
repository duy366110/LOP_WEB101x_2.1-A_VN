window.onload = function(event) {
    /**
     * KIỂU DỮ LIỆU NGUYÊN THUỶ (PRIMITIVE TYPE)
     * 1) Number
     * 2) String
     * 3) Boolean
     * 4) Null
     * 5) Undefined
     * 6) Symbol
     * 7) Bigint
     */

    // 1) Number
    var a = 1;
    var b = 1.5;
    console.log("Kiểu dữ liệu number: ", a);
    console.log("Kiểu dữ liệu number: ", b);
    console.log(typeof a);


    // 2) String
    var name = "Nguyễn Hoàng Khải";
    console.log(name);
    console.log(typeof name);


    // 3) Boolean
    var isUser = true;
    console.log(isUser);
    console.log(typeof isUser);


    // 4) Undefined
    var team;
    console.log('Undefined type: ', team);
    console.log(typeof team);


    // 5) Null
    var team = null;
    console.log(team);
    console.log(typeof team);


    // 6) Symbol
    var team = Symbol(1); // có tham số là môt tả của Symbol và là unique
    console.log(team);
    console.log(typeof team);


    // 7) Bigint
    var team = BigInt(1);
    console.log(team);
    console.log(typeof team);

    /**
     * KIỂU DỮ LIỆU THAM CHIẾU (REFRENCE TYPE) - COMPLEX TYPE
     * 1) Function
     * 2) Object
     */

    // 1) Function
    function test() {
        console.log('Hello function');
    }

    test();
    console.log(typeof test);

    // 2) Object

    var user = {
        name: 'Student A',
        age: 15
    }

    console.log(user);
    console.log(typeof user);

    // DATATYPE Array

    var arr = ['HTML', 'CSS', 'JAVASCRIPT', 1];
    console.log(arr);
    console.log(typeof arr);

    



}