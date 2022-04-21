
$(function() {

  var chatResult = $('.lk__chat-window-body');
  var chatResult_wrap = $('.lk__chat-window-body-wrap');

  chatResult_wrap.scrollTop(chatResult.prop('scrollHeight'));

  $('.lk__doc-table-trigger').click(function() {
    $(this).toggleClass('on');
    $('.lk__doc-table [data-hide]').toggle();
    return false;
  })

  $('[data-tab]').click(function() {
    $('[data-tab]').removeClass('active');
    $('[data-content]').removeClass('active');
    $('[data-content=' + $(this).attr('data-tab') + ']').addClass('active');
    $(this).addClass('active')
  })

  
    $('body').click(function(e) {
      if($(".manager__block--on").get(0)) {
        var parent = e.target;
        if(!$(parent).hasClass("manager__block--on")) {
          while(!$(parent).hasClass("manager__block--on")) {
            if($(parent).hasClass("manager__block--on") || parent.tagName == 'BODY') break;
            parent = parent.parentNode;
          }
          if(!$(parent).hasClass("manager__block--on")) {
            $(".manager__block--on").find('.manager__block-hidden').slideUp();
            $(".manager__block--on").removeClass("manager__block--on");
          }
        }
        
      }

      if($(".ks-select.opened").get(0)) {
        var parent = e.target;
        if(!$(parent).hasClass("opened")) {
          while(!$(parent).hasClass("opened")) {
            if($(parent).hasClass("opened") || parent.tagName == 'BODY') break;
            parent = parent.parentNode;
          }
          if(!$(parent).hasClass("opened")) {
            $(".ks-select.opened").find(".ks-select__block").toggle();
            $(".ks-select.opened").removeClass("opened");
          }
        }
        
      }

      else if($(e.target).attr('[data-js]') == 'managerToggle' || $(e.target).closest("[data-js=managerToggle]").get(0)) {
          e.preventDefault();
          var el = e.target;
          if($(e.target).closest("[data-js=managerToggle]").get(0)) el = $(e.target).closest("[data-js=managerToggle]");

          $(el).closest('.manager__block-wrap').toggleClass('manager__block--on');
          $(el).next('.manager__block-hidden').slideToggle();
      }

      else if($(e.target).attr('[data-js]') == 'managerClose' || $(e.target).closest("[data-js=managerClose]").get(0)) {
        e.preventDefault();

        $(e.target).closest('.manager__block-wrap').removeClass('manager__block--on');
        $(e.target).closest('.manager__block-hidden').slideToggle();
      }

      else if($(e.target).hasClass('manager__block-hidden-settings')){
        e.preventDefault();

        $(e.target).closest('.manager__block-wrap').find('#block-settings').slideToggle();
        $(e.target).closest('.manager__block-wrap').removeClass('manager__block--on');
        $(e.target).closest('.manager__block-hidden').slideToggle();
      }

      if($(e.target).hasClass('ks-select__current') || $(e.target).closest('.ks-select__current').get(0)) {
        if(!$(e.target).hasClass('ks-select__clear')) {
          var el = $(e.target);
          var parent = $(e.target).closest('.select');
          if($(e.target).closest('.ks-select__current').get(0)) el = $(el).closest('.ks-select__current');
          if($(".ks-select.opened").get(0) && $(".ks-select.opened").get(0) !== $(el).closest(".ks-select").get(0)) {
            $(parent).find(".ks-select__block").toggle();
            $(parent).toggleClass("opened");
          }
          $(el).next(".ks-select__block").toggle();
          $(el).closest(".ks-select").toggleClass("opened");
        }
        
      }
  
      else if($(e.target).hasClass('ks-select__item')) {
        var parent = '';
        parent = $(e.target).closest('.select');
        if($(parent).get(0) && $(parent).attr('data-multi') == 'yes') {
          $(e.target).toggleClass("active");
          if(!$(e.target).closest(".ks-select__block").find(".ks-select__item.active").get(0)) {
            $(parent).find(".ks-select__current span").text('Не выбрано');
          } else {
            var str = $(e.target).closest(".ks-select__block").find(".ks-select__item.active").text();
            var txt = str.split('<')[0];
             $(parent).find(".ks-select__current span").text(txt);
          }
          
        } else {
          var str = $(e.target).html();
          var txt = str.split('<')[0];
          $(parent).find(".ks-select__current span").html(txt);
          $(e.target).closest(".ks-select__block").find(".ks-select__item.active").removeClass("active");
          $(e.target).addClass("active");
          
          $(e.target).closest(".ks-select__block").toggle();
          $(e.target).closest(".ks-select").removeClass("opened");
        }
      }
    })

    $('#block-settings .manager__block-hidden-item').on('click', function(e){
      e.preventDefault();
      $(this).find('.settings-triger').toggleClass('trig-select');
    });

    $('.call_feedback').on('click',function(e){
      e.preventDefault();
      $('.modalka__bg, #call_feedback').addClass('on');
    });
    $('.file_input').on('click', function (e) {
      e.preventDefault();
      $(this).next('input').click();
    });
    //Form
    $('a.submit').on('click', function(e){
      e.preventDefault();
      $('.start__hidden').removeClass('on');
      $('.post__ready').addClass('on');
    });
    $('.post__ready a').on('click', function (e) {
      e.preventDefault();
      $('.modalka__bg, .post__ready').removeClass('on');
    });
    
    $('.post__added').on('click', function (e) {
      e.preventDefault();
      $('.modalka__bg, .post__ready').removeClass('on');
    });
    $('.pop_call').on('click', function (e) {
      e.preventDefault();
      $('#call_popup, .modalka__bg').addClass('on');
    });
    $('.modalka__close').on('click', function () {
      $('.modalka__bg').removeClass('on');
      $('#call_popup, #call_feedback, #call_docs, #doc_view,#call_readctor,#call_readctor2').removeClass('on');
    });
    $('.call_docs').on('click', function (e) {
      e.preventDefault();
      $('#call_docs, .modalka__bg').addClass('on');
    });
    $('.add-company').on('click', function (e) {
      e.preventDefault();
      $('#call_readctor, .modalka__bg').addClass('on');
    });
   
    $('.add-next-col').on('click', function (e) {
      e.preventDefault();
      $('#call_readctor2, .modalka__bg').addClass('on');
    });
    $('.doc-view').on('click', function (e) {
      e.preventDefault();
      $('#doc_view, .modalka__bg').addClass('on');
    });

    $('.doc-del').on('click', function (e) {
      e.preventDefault();
      $(this).css('display', 'none');
      $(this).parent('div').find('.doc-stand').css('display', 'flex');
    });
    $('.doc-stand').on('click', function (e) {
      e.preventDefault();
      $(this).css('display', 'none');
      $(this).parent('div').find('.doc-del').css('display', 'flex');
    });

    $(".tel-mask").inputmask("+7 (999) 999-99-99"); 
    $(".tel-mask").attr("placeholder", '+7 (___) ___-__-__');
  
    if($('.lk__slider').get(0)) {
      $('.lk__slider').animate({
        opacity:1
      })
      $(".lk__slider").slick({
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        rows: 0,
        fade: true,
        dots:true,
        
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              rows: 0,
              slidesToScroll: 1,
              dots:false,
              fade: false,
              variableWidth: true,
              touchThreshold: 15,

            }
          },
      
        ]
      })
    }

    if($('.lk__slider2').get(0)) {
      $('.lk__slider2').animate({
        opacity:1
      })
      $(".lk__slider2").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        rows: 0,
        variableWidth: true,
        touchThreshold: 15,
        infinite: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              infinite: true,
              arrows: false,
              

            }
          },
        ]
      })
    }
  });
  $('.brglk .open').click(function(){
   
   $(this).hide();
   $('.close').show();
   $('.lk-mobile-container').addClass('open-lk-menu');
  });
  $('.brglk .close').click(function(){
   
    $(this).hide();
    $('.open').show();
    $('.lk-mobile-container').removeClass('open-lk-menu');
   });

   var click = true;
$('.order__doc__lk').click(function(){
  click = !click;
  if(!click){
    $(this).parents().children('.mor_doc_list').slideDown(300);
    $(this).find('img').addClass('rotate')
  } else{
    $(this).parents().children('.mor_doc_list').slideUp(300);
    $(this).find('img').removeClass('rotate')
  }
});