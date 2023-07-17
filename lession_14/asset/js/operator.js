window.onload = function(event) {
    /**
     * TOÁN TỬ SỐ HỌC
      +    -> cộng
      -    -> trừ
      *    -> nhân
      **   -> luỹ thừa
      /    -> chia lấy nguyên
      %    -> chia lấy dư
      ++   -> tăng 1 giá trị
      --   -> giảm 1 giá trị
    */

      var a = 1;
      var b = 2;

      var cong = a + b;
      console.log("Cộng: " + cong);

      var tru = a - b;
      console.log('Trừ: ' + tru);

      var nhan = a * b;
      console.log("Nhân: " + nhan);

      var luythua = 2**2;
      console.log("Luỹ thừa: " + luythua);

      var chia = 4 / 2;
      console.log("Chia lấy nguyên: " + chia);

      var chiadu = 4 % 2;
      console.log("Chia lấy dư: " + chiadu);

      // Toán tử tiền tố và toán tử hậu tố
      var a = 1;


      // step 1: cộng 1 cho a, a = a + 1, a = 2
      // step 2: trả về a = 7 và in ra màng hình
      ++a;
      console.log(a);


      // step 1: coppy a ra một biết gọi là a' = 6
      // step 2: thực hiện cộng 1 cho a, a = a + 1, a = 2
      // step 3: trả về a' coppy in ra màng hình
      var a = 1;
      var team  = a++;
      console.log("A' coppy: " + team);
      console.log("A nguyên mẫu: " + a);



    /**
     * TOÁN TỬ GÁN
      TOÁN TỬ           VÍ DỤ          KẾT QUẢ
        =               A = B           A = B
        +=              A += B          A = A + B
        -=              A -= B          A = A - B
        *=              A *= B          A = A * B
        **=             A **= B         A = A ** B
        /=              A /= B          A = A / B
        %=              A %= B          A = A % B
    */

    var a = 8;
    
    // var a = a + 1;
    a += 1;
    console.log("Toán tử += :" + a);

    // var a = a - 1;
    a -= 1;
    console.log('Toán tử -= :' + a);

    // var a = a * 2;
    a *= 2;
    console.log("Toán tử *= :" + a);

    // a = a ** 2;
    a **= 2;
    console.log('Toán tử **= :' + a);

    // a = a / 2;
    a /= 16;
    console.log('Toán tử /= :' + a);

    // a = a % 2;
    a %= 2;
    console.log("Toán tử %= :" + a);



    /**
     * TOÁN TỬ NỐI CHUỖI
    */

    var firstName = 'Nguyễn';
    var lastName = 'Khải';
    var fullName = firstName + " " + lastName;

    fullName += ' Test';
    console.log(fullName);

    /**
     * TOÁN TỬ SO SÁNH
      ==        -> bằng
      ===       -> bằng cả về kiểu dữ liệu
      <         -> nhỏ
      >         -> lớn
      <=        -> nhỏ hơn hoặc bằng
      >=        -> lớn hơn hoặc bằng
      !=        -> khác
      !==       -> khác cả về kiểu dữ liệu
    */

    var a = 1;
    var b = 2;

    var c = 1;
    var d = '1';

    console.log("So sánh bằng: ", a == b);
    console.log("So sánh khác: ", a != b);
    console.log("So sánh lớn hơn: ", a > b);
    console.log("So sánh nhở hơn: ", a < b);


    console.log("So sánh bằng so sánh cả kiểu dữ liêu: ", a == c);
    console.log("So sánh bằng so sánh cả kiểu dữ liêu: ", a === c);

    console.log("So sánh bằng so sánh cả kiểu dữ liêu: ", a == d);
    console.log("So sánh bằng so sánh cả kiểu dữ liêu: ", a === d);


    /**
     * TOÁN TỬ LOGICAL
      &&        -> AND
      ||        -> OR
      !        -> NOT
    */

    var a = 1;
    var b = 2;

    if((a > 0) && ( b < 5)) {
        console.log('Điều kiện hợp lệ');

    } else {
        console.log("Điều kiện không hơp lệ");
    }

    let age = 20;

    if((age < 15) || (age > 60)) {
        console.log('Đối tượng ưu tiên');

    } else {
        console.log('Đối tượng không ưu tiên');
    }

    var option = null;
    if(!option) {
        console.log('Đi làm');
        
    } else {
        console.log('Đi chơi');

    }


    var a = true;
    var b = false;
    var c = 3;

    console.log(a && b && c);


    console.log(false || true || 3);

}