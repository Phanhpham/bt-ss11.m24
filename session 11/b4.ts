class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(parameter:number):void{
        this.speed -=parameter;
    
    }
    speedUp(parameter: number): void {
        this.speed += parameter;
       
}
showSpeed(): void {
    console.log("tốc do hien tai",this.speed);
}
}
class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
}
showInfo():void{
    console.log(`Name:${this.name}`);
    console.log(`Speed:${this.speed}`);
    console.log(`Id:${this.id}`);
    console.log(`Gear:${this.gear}`);
}
}

let bicycle = new Bicycle("Old Bike", 30, "12", 2);

bicycle.showSpeed(); 
bicycle.speedUp(9); 
bicycle.slowDown(3); 
bicycle.showInfo();