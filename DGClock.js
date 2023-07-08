// Calling the function repeatedly after each second
setInterval(showTime, 1000);
// Defining the function showTime
function showTime() {
	// Creating object of date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// since time is in 24hr format converting it to 12hr and assigning the am or pm value
	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
	// creating new string with 12hr format time asigned to it
	let currentTime = hour + ":" + min + ":" + sec;

	// Showing time on screen using the currentTime variable
	document.getElementById("time").innerHTML = currentTime;
	// Displaying value of am or pm
    document.getElementById("format").innerHTML= am_pm;
}
showTime();
