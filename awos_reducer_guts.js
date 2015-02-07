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
  alert("krk j rules!");
  $("h1").toggle(function(){
    $(this).css('background-color','blue')
  },function(){
    $(this).css('background-color','green')
  });


}


