/*
Giả sử bạn đang xây dựng một ứng dụng quản lý hình học và bạn cần tạo ra các đối tượng hình học như hình tròn và hình vuông. Dưới đây là cách bạn có thể sử dụng Simple Factory Pattern:
*/
// Bước 1: Định nghĩa Product
// Product
class Shape {
    draw() {
        console.log("Đang vẽ hình");
    }
}

// Concrete Products
class Circle extends Shape {
    draw() {
        console.log("Đang vẽ hình tròn");
    }
}

class Square extends Shape {
    draw() {
        console.log("Đang vẽ hình vuông");
    }
}

//   Bước 2: Định nghĩa Simple Factory
// Simple Factory
class ShapeFactory {
    createShape(type) {
        switch (type) {
            case 'circle':
                return new Circle();
            case 'square':
                return new Square();
            default:
                throw new Error('Loại hình không được hỗ trợ');
        }
    }
}

// Bước 3: Sử dụng Simple Factory Pattern  
const shapeFactory = new ShapeFactory();

const circle = shapeFactory.createShape('circle');
circle.draw();  // Output: Đang vẽ hình tròn

const square = shapeFactory.createShape('square');
square.draw();  // Output: Đang vẽ hình vuông

/*
Trong ví dụ này, Shape là Product, Circle và Square là Concrete Products, và ShapeFactory là Simple Factory. Simple Factory Pattern giúp giảm độ phức tạp khi tạo ra các đối tượng hình học bằng cách tập trung việc tạo đối tượng vào một lớp đơn lẻ (Simple Factory), giúp tăng khả năng bảo trì và giảm lặp lại mã nguồn.
*/




