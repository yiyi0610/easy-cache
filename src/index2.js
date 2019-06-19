import jsfunc from './main'

window.onload = function(){

    function changeText(){

        let i =0;
        
        let content = document.getElementById("argb");
        
        function count(){
            content.innerHTML = i++;
        }
        content.onmouseover = jsfunc.throttol(count,1000,2);
    }


    function change(){
        let content = document.getElementById("upload");

        //content.onchange = function(e){ console.log("xxx",e); jsfunc.imageUpload(e);}
        content.addEventListener("change",function(e){
            jsfunc.imageUpload(e);
        })

    }
    changeText();
    change();



}