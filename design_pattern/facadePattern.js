// Subsystem 1
class Engine {
    start() {
        console.log("Động cơ đã được khởi động.");
    }
}

// Subsystem 2
class AirConditioner {
    turnOn() {
        console.log("Điều hòa đã được bật.");
    }
}

// Subsystem 3
class FuelInjector {
    inject() {
        console.log("Nhiên liệu đã được tiêm vào động cơ.");
    }
}

// Facade
class CarFacade {
    constructor() {
        this.engine = new Engine();
        this.airConditioner = new AirConditioner();
        this.fuelInjector = new FuelInjector();
    }

    startCar() {
        this.fuelInjector.inject();
        this.engine.start();
        this.airConditioner.turnOn();
        console.log("Xe đã được khởi động và sẵn sàng để sử dụng.");
    }
}

// Sử dụng Facade Pattern
const car = new CarFacade();
car.startCar();
