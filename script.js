//Hero typing animation

var typed = new Typed(".typing",{
	strings: ["ductor Musical.","ber Music."],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

//Backtrack song

var backingTrack = document.getElementById("backing-track");
var icon = document.getElementById("sound");

	icon.onclick = function(){
		if(backingTrack.paused){
			backingTrack.play();
			icon.classList.replace("fa-volume-mute","fa-volume-up")
		} else {
			backingTrack.pause();
			icon.classList.replace("fa-volume-up","fa-volume-mute")
		}

	}
//Burger button animation

const menuRespBtn = document.querySelector('.menuResponsive-btn');
const navActive = document.querySelector('.nav-options');
const navItemList = document.querySelectorAll('.nav-options__item');
const navLinks = document.querySelectorAll('.nav-options__item a');

menuRespBtn.onclick = ()=>{
	//menu responsive deployment
	menuRespBtn.classList.toggle('active');
	navActive.classList.toggle('nav-active');

	//menu links fade animation
	linkFade(navItemList);

}

navItemList.forEach(link =>{
	link.onclick = ()=>{
		if(menuRespBtn.classList.contains('active') && navActive.classList.contains('nav-active')){
			setTimeout(()=>{
			navActive.classList.toggle('nav-active');
			menuRespBtn.classList.toggle('active');
			linkFade(navItemList)},200);
		}
	}
	
})

function linkFade(linkList){
	linkList.forEach((link,index)=>{
		if(link.style.animation){
			link.style.animation = '';
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + .5}s`
		}
	})
}
