/*global $ APIKEY*/
$(document).ready(function() {
    $.ajax({
        //   method: "GET",
          url: "https://newsapi.org/v2/sources",
          data: { category: "sport", country: "us", language: "en", apiKey: APIKEY},
          success: function(data) {
              if(data.status == "ok") {
                   console.log(data)
                   for (var i= 0; i < data.sources.length; i++) {
                       var source = document.createElement("OPTION");
                       source.setAttribute("value", data.sources[i].id)
                       source.innerHTML = data.sources[i].name;
                       document.getElementById('selection').appendChild(source);
            }
          }
          function news(site) {
           $.ajax({
        url: "https://newsapi.org/v2/top-headlines?sources=" + site,
        data: {apiKey: APIKEY},
        success: function(articles) {
          for  (var a= 0; a < articles.articles.length; a++) {
              var headline = document.createElement("P")
              headline.innerHTML = articles.articles[a].title;
              document.getElementById("Article").appendChild(headline)
           console.log(articles)
          }
        
        }
    })
          }  $('#source').submit(function(event) {
        event.preventDefault();
        news(document.getElementById("selection").value)
     });
        }
    })
    
    // .done(function( data ) {
    //   console.log( data );
    //   console.log( data.status);
    // });
   
})