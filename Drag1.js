/**
 * Created by Administrator on 2017/3/6.
 */
//        var oDiv = null;
//        var disX = 0;
//        var disY = 0;
//        window.onload=function () {
//            oDiv = document.getElementById('div1');
//            init()
//        } ;
//        function init() {
//            oDiv.onmousedown = FnDown;
//        }
//
//        function FnDown(ev) {
//                var ev = ev || window.event;
//                disX = ev.clientX - oDiv.offsetLeft;
//                disY = ev.clientY - oDiv.offsetTop;
//                document.onmousemove = FnMove ;
//                document.onmouseup = FnUp;
//                return false;
//        }
//        function FnMove(ev) {
//            var ev = ev || window.event;
//            oDiv.style.left = ev.clientX-disX + 'px';
//            oDiv.style.top = ev.clientY-disY + 'px';
//
//        } ;
//
//        function FnUp() {
//            document.onmousemove = null;
//            document.onmouseup = null;
//        } ;

window.onload=function () {
    var dl = new Drag('div1') ;
    dl.init();
} ;
function Drag(id) {
    this.oDiv = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
}

Drag.prototype.init = function () {
    var _this = this ;
    this.oDiv.onmousedown = function () {
        _this.FnDown();
    }
};

Drag.prototype.FnDown = function (ev) {
    var ev = ev || window.event;
    var _this = this ;
    this.disX = ev.clientX - this.oDiv.offsetLeft;
    this.disY = ev.clientY - this.oDiv.offsetTop;
    document.onmousemove = function () {
        _this.FnMove() ;
    } ;
    document.onmouseup = this.FnUp;
    return false;
} ;
Drag.prototype.FnMove = function (ev) {
    var ev = ev || window.event;
    this.oDiv.style.left = ev.clientX-this.disX + 'px';
    this.oDiv.style.top = ev.clientY-this.disY + 'px';
};
Drag.prototype.FnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
};
