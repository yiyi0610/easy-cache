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
        let img = document.getElementById('img')

        content.addEventListener("change",function(e){
            jsfunc.imageUpload(e,setSrc);
        })

    }

    function setSrc(imgpath){
        img.setAttribute('src',imgpath);
    }


    function drawImage(){
        let myCanvas = doucment.getElementById("myCanvas");
        if(myCanvas.getContext){
            let ctx = myCanvas.getContext('2d');
          //  ctx.
            ctx.beginPath()
            ctx.moveTo(0,0);
            ctx.lineTo(0,50);
            ctx.lineTo(50,0);
            ctx.closePath();
            
        }


    }
    changeText();
    change();
    drawImage();



}