//initialize  swiper
new Swiper('.project__slider', {
	// slidesPerView: 2.5,
	spaceBetween: 40,
	freeMode: true,
	initialSlide: 1,
	breakpoints : {
		320: {
			slidesPerView: 1.1
		},
		480: {
			slidesPerView: 1.5
		},
		720: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 2.5
		},
		1240: {
			slidesPerView: 3
		},
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true
	},
	watchSlidersProgress: true,
	watchSlidersVisibility: true
})