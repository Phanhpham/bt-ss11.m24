
class Employee1{
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
class Manager1{
    public name:string;
    protected company: string;
    private phone: string;
    public teamSize:number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.teamSize = teamSize;
    }
    printInfo(): void {
        console.log("TÊN:", this.name);
        console.log("CÔNG TY:", this.company);
        console.log("SĐT:", this.phone);
        console.log("teamSize:", this.teamSize);
    }
    
}


let employee = new Employee ("phanh","MAN Company","123456789",);
employee.printInfo();

let manager1 = new Manager("son", "zxcv Company", "234567899", 8);
manager.printInfo();






