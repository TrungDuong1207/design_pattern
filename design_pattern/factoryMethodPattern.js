/*
Giả sử bạn đang xây dựng một ứng dụng về gửi thông báo (notifications) và bạn cần hỗ trợ việc tạo ra các đối tượng thông báo. Đây là cách bạn có thể sử dụng Factory Method Pattern:
*/

// Bước 1: Định nghĩa Product và ConcreteProduct

// Product
class Notification {
    send(message) {
        console.log(`Gửi thông báo: ${message}`);
    }
}

// ConcreteProduct
class EmailNotification extends Notification {
    send(message) {
        console.log(`Gửi email: ${message}`);
    }
}

// ConcreteProduct
class SMSNotification extends Notification {
    send(message) {
        console.log(`Gửi tin nhắn SMS: ${message}`);
    }
}

//   Bước 2: Định nghĩa Creator và Factory Method
// Creator
class NotificationFactory {
    createNotification(type) {
        // Factory Method
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            default:
                throw new Error('Loại thông báo không được hỗ trợ');
        }
    }
}

//  Bước 3: Sử dụng Factory Method Pattern
const notificationFactory = new NotificationFactory();

const emailNotification = notificationFactory.createNotification('email');
emailNotification.send('Chào mừng đến với ứng dụng của chúng tôi!');

const smsNotification = notificationFactory.createNotification('sms');
smsNotification.send('Cảm ơn bạn đã đăng ký!');

/*
Trong ví dụ này, Notification là Product, EmailNotification và SMSNotification là ConcreteProduct, và NotificationFactory là Creator với Factory Method là createNotification(). Mẫu thiết kế Factory Method giúp tách biệt quyết định tạo ra đối tượng thông báo ra khỏi mã nguồn chính, cho phép bạn linh hoạt thay đổi loại thông báo mà không ảnh hưởng đến phần còn lại của ứng dụng.
*/



