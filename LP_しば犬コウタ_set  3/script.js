
$(function () {
	var audio = $("#audio").get(0);
	var isPlaying = false;
	$("#btn").on("click", function () {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
	});
	audio.onplaying = function() {
		isPlaying = true;
	};
	audio.onpause = function() {
		isPlaying = false;
	};
});

$(function () {
	var audio = $("#audio1").get(0);
	var isPlaying = false;
	$("#btn1").on("click", function () {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
	});
	audio.onplaying = function() {
		isPlaying = true;
	};
	audio.onpause = function() {
		isPlaying = false;
	};
});

audio.load()