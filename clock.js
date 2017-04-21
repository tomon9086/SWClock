try {
	document.getElementById("timezone").innerHTML = new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1];
} catch(err) {
	document.getElementById("timezone").innerHTML = "- - -";
}
setInterval(function() {
	const date = new Date();
	const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	const min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	const sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	const msc = date.getMilliseconds() < 100 ? "0" + (date.getMilliseconds() / 10|0) : date.getMilliseconds() / 10|0;
	const display = hour + ":" + min + ":" + sec + ":" + msc;
	document.getElementById("clock").innerHTML = display;
}, 10);
