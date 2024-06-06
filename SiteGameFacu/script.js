M.AutoInit();
AOS.init();

$(window).on('scroll', function() {
	if ($(window).scrollTop() > $(window).height()) {
		$('#navbar').addClass('scrolled');
		$('#button-pinned').addClass('block');
	} else {
		$('#navbar').removeClass('scrolled');
		$('#button-pinned').removeClass('block');
	}
});

$('#button-pinned').on('click', function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
})

document.addEventListener('DOMContentLoaded', function() {
	const navbar = document.getElementById('navbar');
	const footer = document.getElementById('footer');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				navbar.classList.add('hide');
			} else {
				navbar.classList.remove('hide');
			}
		});
	}, { threshold: 0.9 });

	observer.observe(footer);
});