$(document).ready(function(){$("#ftr").load("footer.html",()=>{$(".currentYear").text((new Date).getFullYear())});new Swiper("#hero",{pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:1,parallax:!0,speed:1e3}),new Swiper("#testimonials_slider",{pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",parallax:!0,speed:1e3});$('[data-pages="search"]').search({searchField:"#overlay-search",closeButton:".overlay-close",suggestions:"#overlay-suggestions",brand:".brand",onSearchSubmit:function(e){console.log("Search for: "+e)},onKeyEnter:function(e){console.log("Live search for: "+e);var t=$("#overlay-search"),a=$(".search-results");clearTimeout($.data(this,"timer")),a.fadeOut("fast");var n=setTimeout(function(){a.find(".result-name").each(function(){0!=t.val().length&&($(this).html(t.val()),a.fadeIn("fast"))})},500);$(this).data("timer",n)}})});
