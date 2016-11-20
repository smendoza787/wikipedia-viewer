var results;
var showResults = document.getElementById("results");
var wipeInput = document.getElementById("wikiSearch");

function getRandomWiki() {
  var randomWiki = "https://en.wikipedia.org/wiki/Special:Random";
  window.open(randomWiki);
}

function searchAllWikis() {

  var keyword = document.getElementById('wikiSearch').value;

  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&limit=10&namespace=0&format=json",
    dataType: "jsonp",
    success: function(data) {
      results = data;
      $("#results").empty();

      for (var i=0; i < results[1].length; i++) {
        $("#results").append("<a href='"  + results[3][i] + "' target='_blank'>" + "<div class='result-box animated fadeInUp'><h2>" + results[1][i] + "</h2><p>" + results[2][i] + "</p></div></a>");
      }
    }
  });


}

$('#wikiSearchForm').submit(function () {
  searchAllWikis();
  return false;
});
