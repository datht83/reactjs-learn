# Sử dụng giao diện có sẳng: [https://startbootstrap.com/template-categories/one-page/]
# import link, script
# Cắt mổi Block là 1 component riêng biệt
# Lập trình tương tác
## Cách gọi hàm tương tác

* Không có tham số: 
    - onClick = {this.ham}
    - onClich= () => this.hienthithongtin
* Có tham số
    - onClick={() => this.hienthithongtin("tham so")}
    - this.ham.bind(this, "tham so")


