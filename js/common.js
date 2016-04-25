/*
 * 普适方法
 * 封装常用方法，做到app和web普适
 * appModel 返回true false 手动设置
 * platform 返回ios android phone pc
 * isAppModel true应用模式，false网页模式
 * app对象，封装uex相关方法
 * web对象，封装web相关方法
 *     utils.platform()
 *     utils.isAppModel()
 *     utils.setItem(key, value)
 *     utils.getItem(key)
 *     utils.removeItem(key)
 *     utils.window.open(id,url,animID,flag,animDuration) 打开新窗口
 *     utils.window.close(animID, animDuration) 关闭窗口
 *     utils.window.openPop(id,url,x,y,w,h) 打开浮动窗口
 *     utils.window.closePop(popName) 关闭浮动窗口
 *     utils.window.closePop(popName) 关闭浮动窗口
 *     utils.window.evalScript(windName,js) 执行主窗口事件
 *     utils.window.evalPopScript(windName, popName, js) 执行浮动窗口事件
 */
var utils = {
    //手设模式
    appModel: true,
    //判断平台类型
    platform: function(){
        var winPlat = window.navigator.platform;
        var isPhone = !(winPlat == 'Win32' || winPlat == 'Win64' || winPlat == 'MacIntel' || winPlat == 'Linux i686' || winPlat == 'Linux x86_64');
        var isAndroid = (window.navigator.userAgent.indexOf('Android') >= 0) ? true : false;
        var isIOS = (winPlat == 'iPad' || winPlat == 'iPod' || winPlat == 'iPhone');
        return isIOS ? 'ios' : (
            isAndroid ? 'android' : (
                isPhone ? 'phone' : 'pc'
            )
        );
    },
    //判断是web还是app模式
    isAppModel: function(){
        try{
            var h = uexXmlHttpMgr.open;
        }catch(e){
            return false;
        }
        return true;
    },
    //设值
    setItem : function(key, value){
        try{
            if(typeof value==='object'){
                value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        }catch(e){
            console.log('setItem error:' + e);
        }
    },
    //取值
    getItem : function(key){
        var value = localStorage.getItem(key);
        try{
            value = JSON.parse(value);
            return value;
        }catch(e){
            return value;
        }
    },
    //清值
    removeItem : function(key){
        localStorage.removeItem(key);
    },
    app : {
        /*
         * 打开新窗口
         */
        open: function(id,url,animID,flag,animDuration){
            if(!id){
                return console.log('id not found');
            }
            if(!url){
                url = id + '.html';
            }
            if(typeof animID!=="number"){
                /*0：无动画
                1:从左向右推入
                2:从右向左推入
                3:从上向下推入
                4:从下向上推入
                5:淡入淡出
                6:左翻页
                7:右翻页
                8:水波纹
                9:由左向右切入
                10:由右向左切入
                11:由上先下切入
                12:由下向上切入*/
                animID = 10;
            }
            var w = "";
            var h = "";
            if(!flag){
                flag = 0;
            }
            if(typeof animDuration!=="number"){
                animDuration = 260;//动画持续毫秒
            }
            uexWindow.open(id, "0", url, animID, w, h, flag, animDuration);
            
        },
        /*
         * 关闭窗口
         */
        close: function(animID, animDuration){
            if(typeof animID!=="number"){
                animID = -1;
            }
            if(typeof animDuration!=="number"){
                animDuration = 260;//动画持续毫秒
            }
            uexWindow.close(animID, animDuration);
        },
        /*
         * 打开浮动窗口
         */
        openPop: function(id,url,x,y,w,h,fontSize){
            if(!id){
                return console.log('id not found');
            }
            if(!url){
                url = id + '.html';
            }
            if(typeof x==='undefined'){
                x = 0;
            }
            if(typeof y==='undefined'){
                y = 0;
            }
            if(!w){
                w = '';
            }
            if(!h){
                h = '';
            }
            if(!fontSize){
                fontSize = window.fontSize || 0;
            }
            var extraInfo = JSON.stringify({"extraInfo":{"opaque":"true","bgColor":"#ecf3f7","delayTime":"250"}});
            uexWindow.openPopover(id, "0", url, "", x, y, w, h, '', "0", 0, extraInfo);
        },
        /*
         * 关闭浮动窗口
         */
        closePop: function(popName){
            uexWindow.closePopover(popName);
        },
        /*
         * 执行主窗口方法
         */
        evalScript: function (windName,js){
            uexWindow.evaluateScript(windName, 0, js); 
        },
        /*
         * 执行浮动窗口方法
         */
        evalPopScript: function (windName, popName, js){
            uexWindow.evaluatePopoverScript(windName, popName, js);
        }
        
    },
    
    web : {
        //补充类似方法
        open: function(){
            
        },
        close: function(){
            
        },
        openPop: function(){
            
        },
        closePop: function(){
            
        },
        evalScript: function(){
            if(arguments.length === 2 && typeof arguments[1] === 'string'){
                var func = arguments[1];
                eval('('+func+')');
            }
        },
        evalPopScript: function(){
            if(arguments.length === 3 && typeof arguments[2] === 'string'){
                var func = arguments[1];
                eval('('+func+')');
            }
        }
    },
    
    
};

/*
 * set
 */
utils.window = {
    open: utils.appModel ? utils.app.open : utils.web.open,
    close: utils.appModel ? utils.app.close : utils.web.close,
    openPop: utils.appModel ? utils.app.openPop : utils.web.openPop,
    closePop: utils.appModel ? utils.app.closePop : utils.web.closePop,
    evalScript: utils.appModel ? utils.app.evalScript : utils.web.evalScript,
    evalPopScript: utils.appModel ? utils.app.evalPopScript : utils.web.evalPopScript,
}

