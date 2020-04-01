// http://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
  script = document.createElement( 'script' );
  script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'; 
  script.onload=releasetheKraken;
  document.body.appendChild(script);
} 
else {
  releasetheKraken();
}
 
function releasetheKraken() {
  // The Kraken has been released, master!
  // Yes, I'm being childish. Place your code here 
  var sites = [
    '9V9', 'AEL', 'BDH', 'BEC', 'BJI', 'DTL', 'EVM', 'EZZ', 'FFM', 'IDP',
    'K61', 'K88', 'MOX', 'ONA', 'OWI', 'RRT', 'SBD'
  ];
  $("table#grid td").addClass("NUKE");
  $("table#sortable tr").addClass("NUKE");
  sites.forEach(function(site) { 
    $("table#grid td[title^='" + site + "']").removeClass("NUKE");
    $("table#sortable td[id='" + site + "']").parent("tr").removeClass("NUKE");
  });
  $(".NUKE").css("display", "none");
}


