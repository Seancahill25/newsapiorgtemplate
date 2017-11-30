/*global $ APIKEY*/
$(document).ready(function() {
	$.ajax({
		//   method: "GET",
		url: "https://newsapi.org/v2/sources",
		data: {
			category: "sport",
			country: "us",
			language: "en",
			apiKey: APIKEY
		},
		success: function(data) {
			if (data.status == "ok") {
				console.log(data);
				for (var i = 0; i < data.sources.length; i++) {
					var source = document.createElement("OPTION");
					source.setAttribute("value", data.sources[i].id);
					source.innerHTML = data.sources[i].name;
					document.getElementById('selection').appendChild(source);
				}
			}

			function news(site) {
				$.ajax({
					url: "https://newsapi.org/v2/top-headlines?sources=" + site,
					data: {
						apiKey: APIKEY
					},
					success: function(articles) {
						document.getElementById("Article").innerHTML = "";
						for (var a = 0; a < articles.articles.length; a++) {
							var ul = document.getElementById("UL")
							var list = document.createElement("li");
							var Anchor = document.createElement('a');
							Anchor.href = articles.articles[a].url;
							Anchor.innerHTML = articles.articles[a].title + "." + "<br>";
							list.innerHTML = articles.articles[a].description + "." + "<br>";
							list.appendChild(Anchor);
							document.getElementById("Article").appendChild(list);
							console.log(articles);
						}
					}
				});
			}
			$('#source').submit(function(event) {
				event.preventDefault();
				news(document.getElementById("selection").value);
			});
		}
	});
})