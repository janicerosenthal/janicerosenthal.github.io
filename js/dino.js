var matches = 0;
var turns = 0;
var firstCard = null;
var secondCard = null;

$(function(){

  var deck = $('.card');
  shuffle(deck);

  $('.card').click(function() {
    if(!$(this).hasClass('matched') && !$(this).hasClass('selected')) {
      if(firstCard == null) {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        firstCard = this;
      } else {
        secondCard = this;
        $(secondCard).addClass('selected');
        if(firstCard.className == secondCard.className) {
          matches++;
          $(firstCard).addClass('matched');
          $(secondCard).addClass('matched');
        }
        firstCard = null;
        secondCard = null;
        turns++;
        if(deck.length/2 == matches) {
          $('#game').prepend('<h2>You won in ' + turns + ' turns</h2>');
        }
      }
    }
  });

  $('#reset').click(function() {
    matches = 0;
    turns = 0;
    $('.matched').removeClass('matched');
    $('.selected').removeClass('selected');
    $('#game h2').remove();
    shuffle(deck);
  });

});

function shuffle(deck) {
  var cardList = [];
  for(var i=0; i<deck.length; i++) {
    cardList.push(deck[i].className);
  }
  for(var i=0; i<deck.length; i++) {
    var randomClassIndex = Math.floor(Math.random() * cardList.length);
    deck[i].className = cardList.splice(randomClassIndex, 1);
  } 
}