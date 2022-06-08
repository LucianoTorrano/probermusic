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

