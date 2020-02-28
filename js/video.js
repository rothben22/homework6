var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	document.getElementById("volume").innerHTML = video.volume *100 +"%";
}


function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	var vid = document.getElementById("myVideo");
	vid.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	var vid = document.getElementById("myVideo");
	vid.playbackRate *= 1.1;
  	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	var vid = document.getElementById("myVideo");
	vid.currentTime += 60;
	if (video.ended){
		vid.currentTime = 0;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	if (video.muted){
		console.log("Changing to Unmuted");
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		console.log("Changing to Muted");
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
}


function changeVolume() {
	var video = document.getElementById("myVideo");
	video.volume = volumeSlider.value / 100;
	document.getElementById("volume").innerHTML = video.volume *100 +"%";
	console.log("Volume is "+ video.volume * 100 + "%");
}


function gray() { 
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
	console.log("In grayscale")
}


function color() {
	document.getElementById("myVideo").style.filter = "grayscale(0%)";
	console.log("In color") 
}

