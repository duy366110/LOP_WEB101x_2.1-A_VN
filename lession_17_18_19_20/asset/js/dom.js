window.onload = function(event) {

    // DOM
    let testList = document.getElementById("test-list");
    console.log([testList]);

    let singleItem = document.querySelector(".test");
    console.log(singleItem);

    let testItems = document.getElementsByClassName('test');
    console.log(testItems);

    let itemsTest = document.querySelectorAll('.test');
    console.log(itemsTest);


    itemsTest.forEach((doc) => {
        console.log(doc);
        doc.addEventListener('click', function (event) {
            this.remove();
        })
    })


    document.getElementById('btn').addEventListener('click', function(event) {
        let li = document.createElement('li');
        li.classList.add('test');
        li.textContent = "text new";
        testList.append(li);
    })


    // STYLE
    let title = document.querySelector('#title');
    title.addEventListener('click', function(event) {
        this.style.color = 'red';
        this.style.fontSize = 25 + 'px';
        this.style.backgroundColor = "yellow";
        this.style.textTransform = 'uppercase';
    })


    // FORM 
    
    let formbtn = document.getElementById('form-btn');

    formbtn.addEventListener('click', function(event) {
        let username = document.getElementsByName('user_name');
        console.log(username[0].value);

        let userpassword = document.querySelector('input[name="user_password"]');
        console.log(userpassword.value);

    })

}