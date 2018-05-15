// 导航
$(function(){
    $(".navlist>li").has("ul").nav();
}) 
//轮播图
$(function(){
    $(".gp6-banner-container")
    .gpBanner(".gp6-banner-wrapper",{
        navigation: {
            nextEl: '.gp6-button-next',
            prevEl: '.gp6-button-prev',
        },
        pagination:{
            el:".gp6-banner-pagination"
        },
        direction:"scroll",
        loop:true
    }) 
})

