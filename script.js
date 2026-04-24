/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function playPause(){
	if(video.paused{
		video.play();
		console.log("playing");
	}
	else{
		video.pause();
		console.log("paused");
	}
}
function updateToggle() {
	if(video.paused){
		toggle.innerText = "►";
	}
	else{
		toggle.innerText = "❚ ❚";
	}
}
toggle.addEventListener('click', playPause);
video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);