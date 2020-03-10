var keylogger = document.getElementById("keylogger");
// fonction fléché
//window.onkeypress = event => {keylogger.value = keylogger.value + event.key}


//autre méthode
document.addEventListener('keydown',function(event)
{
    var key = event.key;
    keylogger.value += event.key;
})