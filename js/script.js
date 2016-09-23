$(document).ready(function() {
 
              var owl1 = $(".best-seller #owl-demo1");
              var owl2 = $(".best-seller #owl-demo2");
              var owl3 = $(".best-seller #owl-demo3");
                

              owl1.owlCarousel({
                   items : 4,
                  itemsDesktop : [1199,3],
                  itemsDesktopSmall : [979,3]

              });
                owl2.owlCarousel({
                   items : 4,
                  itemsDesktop : [1199,3],
                  itemsDesktopSmall : [979,3]

              });
                owl3.owlCarousel({
                   items : 4,
                  itemsDesktop : [1199,3],
                  itemsDesktopSmall : [979,3]

              });

              // Custom Navigation Events
              $(".demo1 .next").click(function(){
                owl1.trigger('owl.next');
              })
              $(".demo1 .prev").click(function(){
                owl1.trigger('owl.prev');
              })
              
              $(".demo2 .next").click(function(){
                owl2.trigger('owl.next');
              })
              $(".demo2 .prev").click(function(){
                owl2.trigger('owl.prev');
              })
              
              $(".demo3 .next").click(function(){
                owl3.trigger('owl.next');
              })
              $(".demo3 .prev").click(function(){
                owl3.trigger('owl.prev');
              })
              
              $(window).scroll(function(){
                var y = $(".slider").offset().top;
                console.log("offset"+y);
                if($(window).scrollTop() >= y){
                    $('.navbar').removeClass('navbar-default').addClass('menufixed');
                    $('.nav>li>a , .navbar-header>a').css("color","#fff");
            } else {
                $('.navbar').removeClass('menufixed').addClass('navbar-default');
            }
            });
                jQuery(document).on('click', '.mega-dropdown', function(e) {
                  e.stopPropagation()
                })
                /*var replaceDigits = function() {
                    var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;", "&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
                    document.body.innerHTML = document.body.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
                }
                window.onload = replaceDigits;*/
                
                $('.header-top-right .dropdown').hover(function() {
                  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
                }, function() {
                  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
                });
                
                $(window).scroll(function(){
                    var y = $(".slider").offset().top;
                    console.log("offset"+y);
                    if($(window).scrollTop() >= y){
                        $(".toTop").show(800);
                    }
                    else{
                         $(".toTop").hide(800);
                        };
                });
    
                $(".toTop").click(function(){
                $("html , body").animate({scrollTop:0}, '800');
    });
                var sync1 = $("#sync1");
                  var sync2 = $("#sync2");

                  sync1.owlCarousel({
                    singleItem : true,
                    slideSpeed : 1000,
                    navigation: true,
                    pagination:false,
                    afterAction : syncPosition,
                    responsiveRefreshRate : 200,
                  });

                  sync2.owlCarousel({
                    items : 15,
                    itemsDesktop      : [1199,10],
                    itemsDesktopSmall     : [979,10],
                    itemsTablet       : [768,8],
                    itemsMobile       : [479,4],
                    pagination:false,
                    responsiveRefreshRate : 100,
                    afterInit : function(el){
                      el.find(".owl-item").eq(0).addClass("synced");
                    }
                  });

                  function syncPosition(el){
                    var current = this.currentItem;
                    $("#sync2")
                      .find(".owl-item")
                      .removeClass("synced")
                      .eq(current)
                      .addClass("synced")
                    if($("#sync2").data("owlCarousel") !== undefined){
                      center(current)
                    }
                  }

                  $("#sync2").on("click", ".owl-item", function(e){
                    e.preventDefault();
                    var number = $(this).data("owlItem");
                    sync1.trigger("owl.goTo",number);
                  });

                  function center(number){
                    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
                    var num = number;
                    var found = false;
                    for(var i in sync2visible){
                      if(num === sync2visible[i]){
                        var found = true;
                      }
                    }

                    if(found===false){
                      if(num>sync2visible[sync2visible.length-1]){
                        sync2.trigger("owl.goTo", num - sync2visible.length+2)
                      }else{
                        if(num - 1 === -1){
                          num = 0;
                        }
                        sync2.trigger("owl.goTo", num);
                      }
                    } else if(num === sync2visible[sync2visible.length-1]){
                      sync2.trigger("owl.goTo", sync2visible[1])
                    } else if(num === sync2visible[0]){
                      sync2.trigger("owl.goTo", num-1)
                    }

                  }
                        
                    //plus and minus buttons
                $('.plus').click(function(e){
                    e.preventDefault();
                    fieldName = $(this).attr('field');
                    var currentVal = parseInt($('input[name='+fieldName+']').val());
                    if (!isNaN(currentVal)) {
                        $('input[name='+fieldName+']').val(currentVal + 1);
                    } else {
                        $('input[name='+fieldName+']').val(0);
                    }
                });
                $(".minus").click(function(e) {
                    e.preventDefault();
                    fieldName = $(this).attr('field');
                    var currentVal = parseInt($('input[name='+fieldName+']').val());
                    if (!isNaN(currentVal) && currentVal > 0) {
                        $('input[name='+fieldName+']').val(currentVal - 1);
                    } else {
                        $('input[name='+fieldName+']').val(0);
                    }
                });
                    /*zooming image*/
                    $("#sync1 .item img").elevateZoom({
                      zoomType : "inner",
                      cursor: "auto",
                        
                    });

            });
