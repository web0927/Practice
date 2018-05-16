require(['jquery','swiper','scroll', 'handlebars','render'], function ($, swiper, scroll, handlebars, render) {
    $.ajax({
        url:'/login',
        success: function (info) {
            render(info,'#tpema', '.list');
        }
    })
    
})