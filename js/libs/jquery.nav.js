;
+function ($){
    $.fn.nav = function(){
        // console.log(this);
        this
        .on("mouseenter",function(){
           // alert("1")
           $(this).children()
           .stop()
           .fadeIn()
           .end()
           .siblings()
           .children()
           .stop()
           .fadeOut();
        })
        .on("mouseleave",function(){
           $(this).children()
           .stop()
           .fadeOut(); 
        })
    }
}(jQuery);