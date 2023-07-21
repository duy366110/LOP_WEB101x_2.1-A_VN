window.onload = function(event) {

    var _team = 10;
    var $team = 10;

    // var 0team = 10;
    // var tea&m = 10;
    // var this = 10;

    /* BUILT - IN - ALERT */
    alert('Hello world');

    /* BUILT - IN - CONSOLE */
    console.log('Hello word');

    /* BUILT - IN - CONFIRM */
    var confirmVal = confirm('Text');
    console.log(confirmVal);

    /* BUILT - IN - ALERT */
    let promptVal = prompt('Age');
    console.log(promptVal);

    /* BUILT - IN - SETTIME OUT */
    setTimeout(() => {
        console.log('Hello setTimeout');
        
    }, 1500)

    /* BUILT - IN - SETINTERVAL */
    setInterval(() => {
        console.log('Hello setInterval');
    }, 2500)

}