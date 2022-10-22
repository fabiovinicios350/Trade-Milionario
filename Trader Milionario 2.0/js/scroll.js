var target = document.querySelectorAll("[data-animeScroll]");
var animationClass="animate";
function animeScroll(){
	var windowsTop = window.pageYOffset;
	target.forEach((element)=>{
		if(windowsTop > element.offsetTop+1800){
			element.classList.add(animationClass);
			}else{
				element.classList.remove(animationClass);
			}
		})
}

window.addEventListener('scroll',()=>{
	animeScroll();
});