var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("Current speed: "+ video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate *= 1.05;
	console.log("Current speed: "+ video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 < video.duration){
		video.currentTime+=15;
	}
	else{
		video.currentTime = 0;
	}
	console.log("Current Location: "+video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		document.querySelector("#volume").innerHTML = 0+"%";
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		document.querySelector("#volume").innerHTML = 100+"%";
	}
});

document.querySelector("#slider").addEventListener("click", function(){
	var slide = document.getElementById("slider").value;
	video.volume = slide/100;
	document.querySelector("#volume").innerHTML = (video.volume*100)+"%";
})

