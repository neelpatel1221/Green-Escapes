const navSlide = () =>{
	const hamburger = document.querySelector(".hamburger");
	const nav = document.querySelector(".nav-links");
	const links = document.querySelectorAll(".nav-links li");
	// Toggle navigation
	hamburger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		// Animated Links
		links.forEach((link, index) =>{
		if (link.style.animation) {
			link.style.animation ='';
		}
		else{
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
		}
	
	});
		// HamBurger Animation
		hamburger.classList.toggle('toggle');
	});

	
}
navSlide();