var oTab=document.getElementById("tab");
var oLis=oTab.getElementsByTagName("li");
var oDiv=oTab.getElementsByTagName("div");
for(var i=0;i<oLis.length;i++){
    var oLi=oLis[i];
    oLi.zhufeng=i
    oLi.onmouseover=function(){
        for (var j=0;j<oLis.length;j++){
            oLis[j].className=""
            oDiv[j].className=""
        }
        this.className="select";
        oDiv[this.zhufeng].className="select";
    }
}

//function tabChange(n){
//    for(var i=0;i<oLis.length;i++){
//        oLis[i].className=""
//        oDiv[i].className="";
//    }
//
//    oLis[n].className="select";
//    oDiv[n].className="select";
//}
//for(i=0;i<oLis.length;i++){
//    oLis[i].zhufeng=i;
//    oLis[i].onmouseover=function(){
//        tabChange(this.zhufeng);
//    }
//}