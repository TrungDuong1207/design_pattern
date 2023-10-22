/*Giả sử bạn đang xây dựng một đối tượng "Computer" có nhiều thuộc tính như CPU, RAM, Storage, và GraphicsCard. Sử dụng mẫu thiết kế Builder, bạn có thể tạo ra một ComputerBuilder để giúp xây dựng các đối tượng Computer một cách linh hoạt. */


//Step 1: Định nghĩa lớp Computer
class Computer {
    constructor(builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.graphicsCard = builder.graphicsCard;
    }

    showSpecs() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}GB`);
        console.log(`Storage: ${this.storage}GB SSD`);
        console.log(`Graphics Card: ${this.graphicsCard}`);
    }
}

//Step 2: Định nghĩa lớp ComputerBuilder
class ComputerBuilder {
    constructor(cpu, ram, storage) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
    }

    setGraphicsCard(graphicsCard) {
        this.graphicsCard = graphicsCard;
        return this;
    }

    build() {
        return new Computer(this);
    }
}

//Step 3: Sử dụng Builder Pattern để xây dựng Computer
const gamingPC = new ComputerBuilder("Intel i9", 32, 1000)
    .setGraphicsCard("NVIDIA RTX 3090")
    .build();

const officePC = new ComputerBuilder("AMD Ryzen 7", 16, 500)
    .setGraphicsCard("Integrated")
    .build();

gamingPC.showSpecs();
/*
Output:
CPU: Intel i9
RAM: 32GB
Storage: 1000GB SSD
Graphics Card: NVIDIA RTX 3090
*/

officePC.showSpecs();
/*
Output:
CPU: AMD Ryzen 7
RAM: 16GB
Storage: 500GB SSD
Graphics Card: Integrated
*/



