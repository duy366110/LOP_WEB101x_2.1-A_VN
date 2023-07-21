window.onload = function(event) {
    var a = 1.2345;
    console.log(a);

    var b = Number(a);
    console.log(b);

    var c = parseInt(a);
    console.log(c);

    var d = 9.6;
    var e = parseFloat(d);
    console.log(e);

    var a = 'Test document ';
    a += 11;

    console.log(a);
    console.log(typeof a);


    var a = 1 + 1 + ' Test document';
    console.log(a);
    console.log(typeof a);


    var a = '1' + '1';
    console.log(a);
    console.log(typeof a);

    var a = '1' - '1';
    console.log(a);
    console.log(typeof a);


    var a = 1;
    console.log(a.toString());;
    console.log(typeof a.toString());
}