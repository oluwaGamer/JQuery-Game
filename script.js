$(document).ready(function(){
    $(".lightbox").click(function(){
      $(".backdrop").animate({"opacity": ".70"}, 500);
      $(".box").animate({"opacity": "1.0"}, 500);
      $(".backdrop, .box").css("display", "block");
    });
    
    $(".thumb").click(function(){
      var largeImage = $(this).attr("src");
      $(".largeImage").attr({src: largeImage});
    });
    
    $(".close").click(function(){
      closeBox();
    });
    
    $(".backdrop").click(function(){
      closeBox();
    });
  });
  
  function closeBox(){
    $(".backdrop, .box").animate({"opacity": "0"}, 500, function(){
    $(".backdrop, .box").css("display", "none");
    });
  }