// Đối tượng gốc
class Image {
    constructor(url) {
        this.url = url;
    }

    display() {
        console.log(`Hiển thị hình ảnh từ URL: ${this.url}`);
    }
}

// Proxy với chức năng caching
class ImageProxy {
    constructor(url) {
        this.url = url;
        this.image = null;
    }

    display() {
        if (!this.image) {
            this.image = new Image(this.url);
        }
        this.image.display();
    }
}

// Sử dụng Proxy Pattern để tạo caching
const proxyImage1 = new ImageProxy("image1.jpg");
proxyImage1.display(); // Output: Hiển thị hình ảnh từ URL: image1.jpg

// Lần thứ hai sử dụng proxy, hình ảnh không cần tải lại từ URL
proxyImage1.display(); // Output: Hiển thị hình ảnh từ URL: image1.jpg

/*
Trong ví dụ này, ImageProxy chịu trách nhiệm tạo đối tượng Image và lưu giữ nó để sử dụng lại trong lần gọi tiếp theo, giúp giảm tải và tăng hiệu suất bằng cách sử dụng caching.
Như vậy, mẫu thiết kế Proxy cho phép bạn kiểm soát quyền truy cập hoặc thực hiện các chức năng bổ sung trước khi chuyển yêu cầu đến đối tượng gốc, cung cấp tính linh hoạt và tăng khả năng kiểm soát trong ứng dụng của bạn.
*/
