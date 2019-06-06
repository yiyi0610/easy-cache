let easyCache = {
    cacheObj:{
        url:'',
        expire:new Date() + 60*60*100,
        unique:''
    },
    getUrl:function( url ) {
        var promise = new Promise( function( resolve, reject ){

            var xhr = new XMLHttpRequest();
            xhr.open( 'GET', url );

            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 ) {
                    if ( ( xhr.status === 200 ) ||
                            ( ( xhr.status === 0 ) && xhr.responseText ) ) {
                        resolve( {
                            content: xhr.responseText,
                            type: xhr.getResponseHeader('content-type')
                        } );
                    } else {
                        reject( new Error( xhr.statusText ) );
                    }
                }
            };

            // By default XHRs never timeout, and even Chrome doesn't implement the
            // spec for xhr.timeout. So we do it ourselves.
            setTimeout( function () {
                if( xhr.readyState < 4 ) {
                    xhr.abort();
                }
            }, 1000 );

            xhr.send();
        });

        return promise;
    },
    injectScript:function( obj ) {
        let head = document.head || document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.defer = true;
        script.text = obj;
        head.appendChild( script );
    },
    setKey(url){
        let urlArr = url.split('/'),
            len = urlArr.length;
        return "easycache-"+urlArr[len-1];
    },
    checkHasScript(url){
        return localStorage.getItem(this.setKey(url));
    },
    checkIsOvertime(){
        
    },
    set:function(obj){
        obj = obj || cacheObj;
        if(obj.constructor == Array){
            let len = obj.length,i=0;
            for(i=0;i<len;i++){
                let newurl = obj[i].url;
                this.getUrl(obj[i].url).then((res)=>{
                    let content = res.content,
                    data = {
                        url:newurl,
                        text:content,
                        expire:'',
                        unique:''
                    };
                    if(this.checkHasScript(newurl)){
                        this.injectScript(content);
                    }else{
                        localStorage.setItem(this.setKey(newurl),JSON.stringify(data));
                    }
                }).catch(err => {

                })
            }

        }else{
            this.getUrl(obj.url).then(res =>{
                let content = res.content,
                data = {
                    url:obj.url,
                    text:content,
                    expire:'',
                    unique:''
                };
                if(this.checkHasScript(obj.url)){
                    console.log(2);
                    this.injectScript(content);
                }else{
                    localStorage.setItem(this.setKey(obj.url),JSON.stringify(data));
                }
            }).catch(err =>{

            })

        }
    }
}

window.easyCache = easyCache;
