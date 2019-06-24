export default {
    bubbleSort: function (arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]
                }
            }
        }
        return arr;
    },


    fastSort: function (arr) {
        if (arr.length < 2) return arr;
        let leftarr = [],
            rightarr = [];
        let q = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (q > arr[i]) {
                leftarr.push(arr[i]);
            } else {
                rightarr.push(arr[i])
            }
        }

        return [].concat(this.fastSort(leftarr), q, this.fastSort(rightarr))
    },

    numsum: function (nums, target) {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                var res = target - nums[i];
                if (target - nums[i] == nums[j]) {
                    console.log("the num is", nums[j], 'and', nums[i])
                    return [i, j]
                }
            }
        }

        return false;
    },

    _once: function (f) {
        let count = false;
        return function () {
            if (!count) {
                count = true;
                let arg = [].slice.call(arguments, 1);
                f(arg);
            }
        }

    },
    _once2: function (f) {
        if (!f.prototype.hasonce && typeof f == 'function') {
            f.prototype.hasonce = true;
            let arg = [].slice.call(arguments, 1);
            return f.apply(this, arg);
        }

    },


    debounce: function (func, wait, immediate) {
        let timeOut;

        return function () {
            if (timeOut) {
                clearTimeout(timeOut)
            };
            let context = this,
                args = arguments;
            if (immediate) {
                timeOut = setTimeout(() => {

                    //   func.apply(context,args);
                    func();

                }, wait)

                if (!timeOut) {
                    func()
                };
            } else {
                timeOut = setTimeout(() => {

                    //func.apply(context,args);
                    func();

                }, wait)
            }
        }

    },
    throttol: function(func, wait, type) { //type =1 定时器 type=2 时间戳

        let perTime = Date.now(),
            timeOut;
            func();
        return function(){
            func();
            if (type == 1) {
                if (!timeOut) {
                    timeOut = setTimeout(() => {
                        func();
                        timeOut = null;
                    }, wait)
                }

            } else {
                let nowtime = Date.now();
                if (nowtime - perTime > wait) {
                    func()
                    perTime = nowtime;
                }
            }
        }

    },

    imageUpload:function(e,cd){
        let img = e.target.files[0];
        console.log(e.target);
        let reader = new FileReader();
        reader.readAsDataURL(img)

        reader.onload = function(){
            if(e.target.value){
                cd.call(null,reader.result)
            }
        }

        reader.onerror = function(){
            console.log(err);
        }
    }

}