class Employee{
    public name:string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log("TÊN:", this.name);
        console.log("CÔNG TY:", this.company);
        console.log("SĐT:", this.phone);
    }
    
}
class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}
let manager = new Manager("son", "zxcv Company", "234567899", 8);
manager.printInfo();