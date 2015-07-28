var oTab=document.getElementById("tab");
var oLis=oTab.getElementsByTagName("li");
var oDiv=oTab.getElementsByTagName("div");
// var content = 

for(var i=0; i<oLis.length; i++){

    (function(num){

        oLis[num].onmouseover = function() {
        for(var j=0; j<oLis.length; j++){
             oLis[j].className = ''
           // oLis[j].className = oLis.[j].className.replace(/'content'/, '');
           //oLis[j].className = oLis[j].className+' content'
        }
         oLis[num].className = 'select'
        oLis[num].classList.add('select')
            for(var i=0; i<oDiv.length; i++){
            oDiv[i].style.display='none';
            if(i==num){
                oDiv[num].style.display = 'block';
            }
        }
    }
    })(i)
}
//console.log(oLis)
// for(var i=0;i<oLis.length;i++){

//     oLis[i].onclick= function(i){
//         console.log(oLis[i])
//     }
//     //var oli=oLis[i];
//     //console.log(i)
//     //console.log(oli)
//     //oli.zhufeng=i;

//     //oLis[i].onmouseover=function(){
//     //    //for(var j=0;i<oLis.length;j++){
//     //    //    oLis[]
//     //    //}
//     //    //console.dir(oli)
//     //    console.log(oLis)
//     //    console.log(i)
//     //    console.log(oLis[i])
//     //     //oLis[i].className="select";
//     //    //oDivs[j].ciassName="";
//     //}
//     //this.className="select";
//     //oDivs[this.zhufeng].ciassName="select"
// }





