////////////////////// hover states for #pics

$('#pics img').wrap('<div class="pic"></div>');

// $.each($('#pics .pic'), function(index, item) {
// 	var title = $('img', item).attr('title');
// 	$(item).prepend('<div class="pic-hover">' + title + '</div>');
// });

$(".pr-box").on('hover', function() {
	$('img', this).css('border', '2px solid #FB933A');
})

///////////////////////CAROUSEL

//write carousel onto DOM

 $('body').append('<div id="carousel"></div>');
 	$('#carousel').append('<div id="left-button" class="action-button fa fa-arrow-circle-left fa-4x"></div>'+'<img src="#" class="action-button">'+'<i id="right-button" class="action-button fa fa-arrow-circle-right fa-4x"></i>'+'<i id="close-button" class="fa fa-times fa-2x"></i>');
 	// $('#carousel').append('<img src="#">');
 	// $('#carousel').append('<div id="right-button">></div>');
 	// $('#carousel').append('<div class="close-carousel">X</div>');

//Make pics on page into an array

var picArray = $("#pics img").map(function() {
  return $(this).attr("src");
});

var currentImage = null;


console.log(picArray);


//open carousel

//Click on a .pic (not in carousel yetl)

$('#pics .pic').on('click', function() {

	$('#carousel').fadeToggle('slow');

	var openImage =($('img', this).attr("src"));
	$('#carousel img').attr('src', openImage);
	//get index number of displayed image
	var openImageIndex = jQuery.inArray( openImage, picArray);
	//change current image var to new index
	currentImage = openImageIndex;
});


function nextPic() {
	if (currentImage == (picArray.length-1)) {
		currentImage = 0;
	} else {
	currentImage++;
	}
	
	$('#carousel img').attr('src', picArray[currentImage]);
}

function lastPic() {
	if (currentImage == 0) {
		currentImage = picArray.length-1;
	} else {
	currentImage--;
	}
	$('#carousel img').attr('src', picArray[currentImage]);

}

function exitCarousel() {
	$('#carousel').css('display', 'none');
}



//Action and bindings

$('#right-button').on('click', function() {
	nextPic();
});

$('#carousel img').on('click', function() {
	nextPic();
});

$('#left-button').on('click', function() {
	lastPic();
});

$('#close-button').on('click', function() {
	exitCarousel();
});

$('#carousel').on('click', function(e) {
	 if (!$(e.target).hasClass('action-button')) {
	 	exitCarousel();
	 }
});


////////////////////////MASONRY

$(window).load(function() {

	var mason = $('#mason')
	mason.masonry({
		columnWidth: 24,
		itemSelector: '.pic',
		gutter: 1,
	});

});



///////////////////////MOBILE

$('#nav-button').on('click', function() {
	$('nav').slideToggle();
});

// if ($('window').width() >= 640) {
// 	$('nav').css('display', 'inline-block');
// };


