// http://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
  script = document.createElement( 'script' );
  script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'; 
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
      '1V6', '2V5', '33V', '4V1', 'AIB', 'BDU', 'BJC', 'EIK', 'FTG', 'FTG', 'RCV',
      'FLY', 'HEQ', 'LMO', '4V0', 'SBS', 'STK', 'STK', 'TEX', '5K2', 'GCK', 'IDP',
      'IDP', 'K51', 'K61', 'K88', 'OIN', 'PTT', 'UKL', 'GCM', 'OKM', 'ADM', 'AXS',
      'WDG', 'RIL', 'RBX', 'SGU', 'HHF', 'DUX', 'HRX', 'TX13/BPC', 'PPA', 'PYX', 'PVW'
  ];
  $("table#grid td").addClass("NUKE");
  $("table#sortable tr").addClass("NUKE");
  sites.forEach(function(site) { 
    $("table#grid td[title^='" + site + "']").removeClass("NUKE");
    $("table#sortable td[id='" + site + "']").parent("tr").removeClass("NUKE");
  });
  $(".NUKE").css("display", "none");
}


