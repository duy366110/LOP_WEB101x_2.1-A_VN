window.onload = function(event) {
    let arr_01 = [1, 2, 3, 4, 5];

    let arr_02 = new Array(10);

    arr_02[0] = 6;
    arr_02[1] = 7;

    console.log(arr_01);
    console.log(arr_02);


    // VÒNG LẶP FOR
    console.log('FOR');
    for(let i = 0; i < arr_02.length; i++) {
        // if(i == 1) {
        //     // continue;
        //     break;
        // }

        console.log(arr_02[i]);
        // return;
    }


    // VÒNG LẶP WHILE
    console.log('WHILE');
    let i = 0;
    while(i < arr_02.length) {
        console.log(arr_02[i]);
        i++;
    }

    let u = 0;

    do {

        console.log('Test');
        console.log(u);
        u++;

    } while (u < arr_01.length)
    
    // VÒNG LẶP FOREACH
    console.log('FOREACH');
    arr_02.forEach((elm, index, arr_origin) => {
        console.log(elm);
        console.log(index);
        console.log(arr_origin);

    })

    // FOR OF
    console.log('FOR OF');
    for(let val of arr_02) {
        console.log(val);
    }

    // THÊM PHẦN TỬ VÀO ĐẦU MẢNG
    console.log('UNSHIFT');
    arr_02.unshift(8);
    console.log(arr_02);

    // XOÁ PHẦN TỬ ĐẦU MẢNG
    console.log('SHIFT');
    arr_02.shift();
    console.log(arr_02);

    // THÊM PHẦN TỬ VÀO CUỐI MẢNG
    console.log('PUSH');
    arr_02.push(11);
    console.log(arr_02);

    // XOÁ PHẦN TỬ CUỐI MẢNG
    console.log('POP');
    arr_02.pop();
    console.log(arr_02);

    // XOÁ MẢNG TẠI VỊ TRÍ BẤT KỲ

    arr_01.splice(1, 1, 19);
    console.log(arr_01);
}