/**
 * Created by Administrator on 2017/3/6.
 */
//继承就是子类不影响父类d的一些代码功能(代码的复用)；
//属性的继承指的就是：调用父类的构造函数call
//方法的继承 ;使用的是for in的形式
function CreatePerson(name,sex) { //父类
    this.name = name;
    this.sex =sex;
}
CreatePerson.prototype.showName = function () {
    alert(this.name) ;
};
var p1 = new CreatePerson('小明','性别');
p1.showName();
p1.showJob() ;

CreatePerson.prototype.showSex =function () {
    alert(this.sex)
}

//创建一个子类来继承
function CreateStar(name,sex,job) { //子类
    //this.name = name;
    //this.sex = sex;
    //在这里调用父类就相当有父类的属性了
    CreatePerson.call(this,name,sex) ;
    this.job = job;

}
//给子类添加方法会影响到父类
//例如
CreateStar.prototype.showJob = function () {
    alert(this.job)
};
//CreateStar.prototype = CreatePerson.prototype;
extend(CreateStar.prototype,CreatePerson.prototype) ; //父类在for in封装函数的后面
var p2 = new CreateStar('大名','男','演员');
p2.showName() ;
p2.showSex();

function extend(obj1, obj2) {
    for( var attr in obj2){
        obj1[attr]=obj2[attr];
    }
}
