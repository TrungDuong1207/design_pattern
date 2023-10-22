// Abstraction
class Shape {
    constructor(drawer) {
        this.drawer = drawer;
    }

    draw() {
        console.log("Vẽ hình:");
        this.drawer.draw();
    }
}

// Implementor
class Drawer {
    draw() {
        console.log("Mặc định");
    }
}

// Refined Abstraction
class Rectangle extends Shape {
    constructor(drawer) {
        super(drawer);
    }

    draw() {
        console.log("Vẽ hình chữ nhật");
        this.drawer.draw();
    }
}

// Refined Abstraction
class Circle extends Shape {
    constructor(drawer) {
        super(drawer);
    }

    draw() {
        console.log("Vẽ hình tròn");
        this.drawer.draw();
    }
}

// Refined Abstraction
class ImageBackground extends Drawer {
    constructor(imageUrl) {
        super();
        this.imageUrl = imageUrl;
    }

    draw() {
        console.log(`Nền hình ảnh: ${this.imageUrl}`);
    }
}

// Refined Abstraction
class ColorBackground extends Drawer {
    constructor(color) {
        super();
        this.color = color;
    }

    draw() {
        console.log(`Nền màu: ${this.color}`);
    }
}

const imageBackground = new ImageBackground("background.jpg");
const colorBackground = new ColorBackground("Xanh");

const rectangleWithImageBackground = new Rectangle(imageBackground);
const circleWithColorBackground = new Circle(colorBackground);

rectangleWithImageBackground.draw();
circleWithColorBackground.draw();

