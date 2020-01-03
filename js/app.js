// map module

let map;
let mapBlock = document.querySelector('.map');
let mCenter = {lat: 40.6917159, lng: -73.9158478,};

map = new google.maps.Map(mapBlock, {
	center:mCenter,
	zoom:12,
	disableDefaultUI:true
});
let marker = new google.maps.Marker({
	position:mCenter,
	map:map,
	icon:'img/marker.png'
});

// slider

$('.news').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
  arrows:true,
  autoplay:true,
  autoplaySpeed:3000,
});

$('.single-item').slick({
  vertical:true,
  dots:true,
});


// nav menu

window.addEventListener('scroll', function (){
	let header = document.querySelector('.nav-bar');
  console.log(header);
	if (window.pageYOffset >= header.clientHeight) {
		header.classList.add('header-fix')
	} else {
		header.classList.remove('header-fix')

	}
}
)


let lnk = $('.nav-item');
    $('.nav-menu').on("click", 'a', function (event) {
        event.preventDefault();
        console.log(this);
        let id  = $(this).attr('href');
        console.log(id);
         let top = $(id).offset().top;
         let adv_top = document.querySelector('.nav-bar').clientHeight;
         console.log(top, adv_top);
        $('html, body').animate({scrollTop: (top-adv_top)}, 2000);
    });


//modal
$('.gallery img').on('click', function(e)
{
  let $imgSrc = $(this).attr('src');
  let $modalImage = $('<img>');
  $modalImage.attr('src', $imgSrc).addClass('ba-modal__image');
  $('.ba-modal-content-wrapper').append($modalImage);
  openModal();
}
)

let openModal = function(){
  $('.ba-modal').addClass('ba-modal-open');
  $('body').addClass('ba-modal-is-open');
  $(document).on('keydown', function (e){
    if (e.keyCode == 27){
      closeModal();
    }
  })
}
let closeModal = function(){
  $('.ba-modal').removeClass('ba-modal-open');
  $('body').removeClass('ba-modal-is-open');
  $('.ba-modal-content-wrapper').empty();
}
$('.ba-modal-close').on('click', closeModal);
$('.ba-modal').on('click', function(e){
  let modalContent = $('.ba-modal-content');
  if (!modalContent.is(e.target) && modalContent.has(e.target).length==0){
    closeModal();
  }
})