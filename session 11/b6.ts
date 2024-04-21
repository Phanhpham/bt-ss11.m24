class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getDescription(): void {
        console.log("name",this.name);
        console.log("price",this.price);
    }
}
class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }
    getDescription(): void {
        super.getDescription();
        console.log("brand",this.brand);
    }
}

 let electronics = new Electronics("electronic stove", 3400, "zxcv Electronics");
electronics.getDescription();