$(document).ready(function(){
    initialize("myCarousel");
    initialize("myCarousel2");
});

function habilitarItems(id, length){
    for( let i=0 ; i< length; i++ ){

        $(`.item${i+1}`).click(function(){
            $(id).carousel(i);
        });
    }
}

function initialize(id){

     // Activate Carousel
  $(id).carousel("pause");

  // Click on the button to start sliding
  $("#myBtn").click(function(){
    $(id).carousel("cycle");
  });

  // Click on the button to stop sliding
  $("#myBtn2").click(function(){
    $(id).carousel("pause");
  });

  habilitarItems(id, 7);
  habilitarItems(id, 13);

  // Enable Carousel Controls
  $(".left").click(function(){
    $(id).carousel("prev");
  });
  $(".right").click(function(){
    $(id).carousel("next");
  });
}