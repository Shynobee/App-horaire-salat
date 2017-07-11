var date = new Date(); 
	var times = prayTimes.getTimes(date, [48.98, 2.49], +1);
	var list = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha', 'Midnight'];

	var html = '<div id="timetable">';
	html += '<div id="date"><div>'+ date.toLocaleDateString()+ '</div></div>';
	for(var i in list)	{
		html += '<div id="heure"><div><p>' + list[i]+ '<br>' + '<br>' + times[list[i].toLowerCase()]+ '</p><div id=demo></div></div></div>';
	}
	html += '</div>';
	document.getElementById('table').innerHTML = html;
// fixé la date 
var countDownDate = new Date(times).getTime();

// decompte chaque seconde
var x = setInterval(function() {

  // fixé le jour et l'heure actuelle
  var now = new Date().getTime();

  // calcule du delta de temps
  var distance = countDownDate - now;

  // Calcul de temps
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // afficher l'élément avec id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // si le compte a rebour est fini afficher du texte
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);