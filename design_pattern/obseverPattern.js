// Subject: Đối tượng giữ trạng thái và danh sách Observers
class Subject {
    constructor() {
      this.observers = [];
    }
  
    // Thêm Observer vào danh sách
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Xóa Observer khỏi danh sách
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    // Thông báo cho tất cả Observers về sự thay đổi
    notifyObservers() {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  
  // Observer: Đối tượng nhận thông báo và cập nhật trạng thái
  class Observer {
    constructor(name) {
      this.name = name;
    }
  
    // Phương thức cập nhật trạng thái khi nhận được thông báo
    update() {
      console.log(`${this.name} đã nhận được thông 
       và đã được cập nhật.`);
    }
  }
  
  // Sử dụng Pattern Observer
  const subject = new Subject();
  
  const observer1 = new Observer("Observer 1");
  const observer2 = new Observer("Observer 2");
  
  // Đăng ký Observers với Subject
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  // Thông báo cho tất cả Observers về sự thay đổi
  subject.notifyObservers();
  
  // Kết quả đầu ra sẽ là:
  // Observer 1 đã nhận được thông báo và đã được cập nhật.
  // Observer 2 đã nhận được thông báo và đã được cập nhật.
  