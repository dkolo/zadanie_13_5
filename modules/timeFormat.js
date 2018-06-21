var os = require('os');
var colors = require('colors');

function time() {
    var uptime = os.uptime();
    var hours = (uptime / 3600).toFixed(0);
    var minutes = (uptime / 60).toFixed(0);
    var seconds = (uptime % 60);

    console.log('Uptime: ~ '.green + hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.');
}

exports.clock = time;