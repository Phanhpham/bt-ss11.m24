/**
  cách tạo class
 */
class Student1 {
    // khai báo các thuoc tinh
     protected name:string
    // mặc định nếu ko điền thì sẽ la public 
    // bên ngoài class Student co the truy cap dc
    constructor(name:string){
        this.name=name;
    }
    // nơi khai báo các phương thưc 
    // get thì có return và ko co tham số 
    getName(){
        return this.name
    }
    // co phương thức thay đổi tên ng đó 
    // co tham số nhận vào và k can return 
    setName(newName:string){
        this.name=newName;
    }
}
// instance nghia la đi tạo đối tượng từ class
let std1=new Student1("minh thu");
let std2=new Student1("hoa");
std1.setName(" lan anh");
console.log("std2",std1);
console.log(11111 ,std1.getName());
console.log("std2",std1);

/**
 access modified - phạm vi truy cập
 3 pham vi:
 1.public
 thì bên ngoài co thẻ truy cap dc 
 2.private
 chỉ dc truy cập ở bên trong đối class 
 - thếmuoons lấy và thay đổi thì lm the nào?
 mình phải tạo ra các phươnng thức để
  lấy giá trị và cap nhat gia trị 
 3.protected 
chỉ dc truy cập o ben trong class và subclass(class con)
 */

