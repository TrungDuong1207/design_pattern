/*
Giả sử bạn đang xây dựng một ứng dụng quản lý thiết bị Bluetooth và bạn cần một cơ chế để theo dõi tình trạng kết nối Bluetooth và cung cấp cách để tương tác với thiết bị Bluetooth duy nhất.
Singleton Pattern có thể giúp bạn với nhiệm vụ này.
*/

// Bước 1: Định nghĩa Singleton Class
class BluetoothManager {
    constructor() {
        if (BluetoothManager.instance) {
            return BluetoothManager.instance;
        }

        this.devices = [];
        BluetoothManager.instance = this;
    }

    addDevice(deviceName) {
        this.devices.push(deviceName);
    }

    listDevices() {
        console.log("Danh sách các thiết bị Bluetooth:");
        this.devices.forEach(device => {
            console.log(device);
        });
    }
}
// Bước 2: Sử dụng Singleton
const manager1 = new BluetoothManager();
manager1.addDevice("Tai nghe Bluetooth");
manager1.addDevice("Loa Bluetooth");

const manager2 = new BluetoothManager();
manager2.addDevice("Bàn phím Bluetooth");

manager1.listDevices();
// Output:
// Danh sách các thiết bị Bluetooth:
// Tai nghe Bluetooth
// Loa Bluetooth
// Bàn phím Bluetooth

manager2.listDevices();
// Output:
// Danh sách các thiết bị Bluetooth:
// Tai nghe Bluetooth
// Loa Bluetooth
// Bàn phím Bluetooth

console.log(manager1 === manager2); // true



/*
Trong ví dụ này, lớp BluetoothManager được triển khai theo Singleton Pattern. 
Mỗi lần bạn cố gắng tạo một thể hiện mới, bạn sẽ nhận được cùng một thể hiện duy nhất. Điều này cho phép bạn theo dõi danh sách các thiết bị Bluetooth từ bất kỳ nơi nào trong ứng dụng và đảm bảo rằng không có nhiều thể hiện BluetoothManager được tạo ra.
*/