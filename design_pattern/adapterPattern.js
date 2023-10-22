//Giả sử bạn có một hệ thống quản lý tài khoản ngân hàng với một interface như sau:
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    checkBalance() {
        return this.balance;
    }
}

//Tuy nhiên, bạn muốn tích hợp hệ thống thanh toán thẻ tín dụng có một interface khác vào hệ thống quản lý tài khoản ngân hàng. Đây là cách bạn có thể sử dụng Adapter Pattern:

//Bước 1: Định nghĩa Interface mới (Thanh toán thẻ tín dụng)
class CreditCard {
    constructor(creditLimit) {
        this.creditLimit = creditLimit;
    }

    getCreditLimit() {
        return this.creditLimit;
    }
}
//Bước 2: Tạo Adapter để chuyển đổi từ BankAccount sang CreditCard
class CreditCardAdapter {
    constructor(bankAccount) {
        this.bankAccount = bankAccount;
    }

    getCreditLimit() {
        const balance = this.bankAccount.checkBalance();
        // Chuyển đổi số dư từ tài khoản ngân hàng thành giới hạn tín dụng của thẻ tín dụng
        return balance * 2;
    }
}
//Bước 3: Sử dụng Adapter
const bankAccount = new BankAccount(1000);
const creditCardAdapter = new CreditCardAdapter(bankAccount);

const creditLimit = creditCardAdapter.getCreditLimit();
console.log(`Giới hạn tín dụng của thẻ tín dụng: ${creditLimit}`);
// Output: Giới hạn tín dụng của thẻ tín dụng: 2000


/*
Trong ví dụ này, CreditCardAdapter chuyển đổi thông tin từ BankAccount thành một giới hạn tín dụng dựa trên số dư của tài khoản ngân hàng. Người dùng chỉ cần tương tác với CreditCardAdapter để lấy thông tin giới hạn tín dụng, mặc dù nó sử dụng dữ liệu từ BankAccount. Điều này cho phép bạn tích hợp các hệ thống có các interface khác nhau một cách linh hoạt và không làm thay đổi mã nguồn của các hệ thống đã có.
*/