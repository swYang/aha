/*
 * content通用方法
 */
$(function() {
    FastClick.attach(document.body);
});

;(function(){
    var s = window.getComputedStyle(document.querySelector("#page-bottom"), null);
    window.fontSize = parseInt(s.fontSize);
    window.windowHeight = parseInt(s.height);
    window.windowWidth  = parseInt(s.width);
    
    var h = 0;
    var f = 0;
    
    if(pageContainer.header){
        h = 3;
    }
    if(pageContainer.footer){
        f = 4;
    }
    
    window.headerHeight = parseInt(s.fontSize) * h;
    window.footerHeight = parseInt(s.fontSize) * f;
    
    $("#header").attr('style', 'height:'+headerHeight+'px;');
    $("#footer").attr('style', 'height:'+footerHeight+'px;');
    $("#header").removeClass('uhide');
    $("#footer").removeClass('uhide');
})();

window.uexOnload = function(type){
    if(!type){
        uexWindow.setWindowScrollbarVisible('false');
        uexWindow.preOpenStart();
        
        var arr = location.href.split('/');
        var url = arr[arr.length-1];
        var name = url.split('.')[0];
        if(pageContainer.header){
            utils.window.openPop(name + "_header",name + "_header.html",0,0,"",headerHeight,parseInt(fontSize));
        }
        if(pageContainer.footer){
            utils.window.openPop(name + "_footer",name + "_footer.html",0,windowHeight - footerHeight,"",footerHeight,parseInt(fontSize));
        }
        
        uexWindow.preOpenFinish();
    }
}

function changeBgColor(){
    var newBgColor = '#' + parseInt(Math.random()*255).toString(16) +
                    parseInt(Math.random()*255).toString(16) +
                    parseInt(Math.random()*255).toString(16);
    $("#content").attr('style', 'background-color:' + newBgColor)
}

/*
 * 匹配header和footer中的同名事件
 */
$("#header").on('click', function(){
    //uexWindow.evaluatePopoverScript('','','')
    //uexWindow.evaluateScript("", 0, "changeBgColor()");
    utils.window.evalScript("","changeBgColor()");
})