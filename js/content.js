/*
 * content通用方法
 */
;(function(){
    var s = window.getComputedStyle(document.querySelector("#page-bottom"), null);
    window.fontSize = parseInt(s.fontSize);
    window.headerHeight = parseInt(s.fontSize) * 3;
    window.footerHeight = parseInt(s.fontSize) * 4;
    window.windowHeight = parseInt(s.height);
    window.windowWidth  = parseInt(s.width);
    $("#header").attr('style', 'height:'+headerHeight+'px;');
    $("#footer").attr('style', 'height:'+footerHeight+'px;');
})();

$(function() {
    FastClick.attach(document.body);
});

window.uexOnload = function(type){
    if(!type){
        uexWindow.setWindowScrollbarVisible('false');
        uexWindow.preOpenStart();
        
        
        uexWindow.openPopover("index_header","0","index_header.html","",0,0,"",headerHeight,parseInt(fontSize),0);
        uexWindow.openPopover("index_footer","0","index_footer.html","",0,windowHeight - footerHeight,"",footerHeight,parseInt(fontSize),0);
        
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
    changeBgColor();
})