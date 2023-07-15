window.onload = function(event) {
    // CẤU TRÚC ĐIỀU KIỆN: IF - ELSE

    var diem = 5.5;

    if(diem < 5) {
        console.log('Học sinh yếu');

    } else if(diem >= 5 && diem <= 6) {
        console.log("Học sinh trung bình");

    } else if(diem > 6 && diem <= 7 ) {
        console.log("Học sinh tiên tiến");

    } else if(diem > 7 && diem < 9 ) {
        console.log("Học sinh khá");

    } else {
        console.log('Học sinh giỏi');
    }


    // CẤU TRÚC ĐIỀU KIỆN: SWITCH - CASE

    var type = '0';

    switch(type) {
        case '6':
            console.log('Sản phẩm chất chưa tốt');
            break
        
        case '5':
        case '4':
        case '3':
            console.log('Sản phẩm laoị trung');
            break
        
        case '2':
        case '1':
            console.log('Sản phẩm loại tốt');
            break

        default:
            console.log('Sản phẩm chất lượng chưa xác định');
            break;
    }

    // CẤU TRÚC ĐIỀU KIỆN TOÁN TỬ BA NGÔI

    var option = 1;
    var team = option? 'Bạn chọn option - 01' : 'Bạn chọn option - 02';
    console.log(team);
}