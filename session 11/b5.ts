class Employee2 {
    protected companyName: string; // protected: có thể truy cập từ lớp con
    private employeeID: number; // private: không thể truy cập từ bên ngoài lớp

    constructor(companyName: string, employeeID: number) {
        this.companyName = companyName;
        this.employeeID = employeeID;
    }

    displayEmployeeInfo(): void {
        console.log(`Company: ${this.companyName}, ID: ${this.employeeID}`);
    }
}

class Manager2 extends Employee {
    constructor(companyName: string, employeeID: number) {
        super(companyName, employeeID);
    }

    displayManagerInfo(): void {
        console.log(`Manager - Company: ${this.companyName}, ID: ${this.employeeID}`);
        // Trong lớp con, có thể truy cập thuộc tính protected của lớp cha
    }
}

// Sử dụng các lớp đã định nghĩa
const employee1 = new Employee5 ("ABC Company", 12345);
employee1.displayEmployeeInfo(); // Kết quả: Company: ABC Company, ID: 12345

const manager2 = new Manager2("XYZ Company", 54321);
manager1.displayManagerInfo(); // Kết quả: Manager - Company: XYZ Company, ID: 54321
