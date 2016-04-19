/*
 * header通用方法
 */
$(function() {
    FastClick.attach(document.body);
});

window.uexOnload = function(type){
    if(!type){
        $("#header").on('click', function(){
            //uexWindow.evaluatePopoverScript('','','')
            //uexWindow.evaluateScript("", 0, "changeBgColor()");
            utils.window.evalScript("","changeBgColor()");
        })
    }
}