"use strict";

window.onload = function(event) {

    // Delaration function
    function del () {
        console.log('Hello function delaration function');

    }

    del();


    // Expression function
    const exp = function (a = 0, b = 0) {
        return a + b;
    }

    console.log(exp(1, 2));

    // Arrow function
    const arrow = (a = 1) => {
        console.log(a);
        
    }

    arrow(3);

}