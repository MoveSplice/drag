/**
 * Created by Administrator on 2017/3/6.
 */
/*
 var oParent = null;
 var aInput =null;
 var aDiv =null;
 window.onload=function () {
 oParent = document.getElementById("div1");
 aInput = oParent.getElementsByTagName("input");
 aDiv = oParent.getElementsByTagName("div");
 init()

 } ;
 function init() {
 for(var i=0;i<aInput.length;i++){
 aInput[i].index=i;
 aInput[i].onclick= change ;
 }
 }

 function change() {
 for(var j=0;j<aInput.length;j++){
 aInput[j].className = '';
 aDiv[j].style.display = 'none';
 }
 this.className = 'active';
 aDiv[this.index].style.display = 'block';
 };
 */
//改成面向对象的方法
//全局变量就是属性
//函数就是方法
//Onload中创建对象
//注意面向对象中的this在事件中或者在定时器中很容易被修改
window.onload=function () {
    var t1 = new Tab("div1");
    t1.init();
    t1.autoPlay()
    var t2 = new Tab("div2");
    t2.init();
    t2.autoPlay()
};
function Tab(id) {
    this.oParent = document.getElementById(id);
    this.aInput = this.oParent.getElementsByTagName("input");
    this.aDiv = this.oParent.getElementsByTagName("div");
    this.iNow = 0;
}
Tab.prototype.init = function () {
    var _this = this ;
    for(var i=0;i<this.aInput.length;i++){
        this.aInput[i].index=i;
        this.aInput[i].onclick= function () {
            _this.change(this)
        } ;
    }
};
Tab.prototype.change = function (obj) {
    for(var j=0;j<this.aInput.length;j++){
        this.aInput[j].className = '';
        this.aDiv[j].style.display = 'none';
    }
    obj.className = 'active';
    this.aDiv[obj.index].style.display = 'block';
};
Tab.prototype.autoPlay=function () {
    var _this=this ;
    setInterval(function () {
        if(_this.iNow==_this.aInput.length-1){
            _this.iNow=0;
        }else{
            _this.iNow++;
        }

        for(var j=0;j<_this.aInput.length;j++){
            _this.aInput[j].className = '';
            _this.aDiv[j].style.display = 'none';
        }
        _this.aInput[_this.iNow].className = 'active';
        _this.aDiv[_this.iNow].style.display = 'block';
    },3000)
}
