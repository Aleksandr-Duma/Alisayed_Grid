
(function(){

	const burger = document.querySelector('.button-burger');
	const navigation = document.querySelector('.navigation');

	burger.addEventListener('click', function(){
		navigation.classList.toggle('active');
		burger.classList.toggle('active');
	})

// ----------------------smooth scrolling-------------------------
	const links = document.querySelectorAll('.link');

	for(let i = 0; i < links.length; i++){
		links[i].addEventListener('click', function(event){
			event.preventDefault();
			const blockId = event.target.getAttribute('href').substr(1);

			document.getElementById(blockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}

}());