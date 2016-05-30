
function submitUrl() {
	var loading = "<i class='fa fa-refresh fa-spin fa-1x fa-fw'></i>";
	var complete = "Colexsys Prototype";
	document.getElementById('header-title').innerHTML = loading;
	var input = document.getElementById('url').value;
	var myUrl = {
		url: input
	};

	Stamplay.Codeblock("diffbot").run(myUrl).then(function(err) {
			document.getElementById('header-title').innerHTML = complete;
      		console.log(err);
      		document.getElementById('title').innerHTML = err.body.title;
      		document.getElementById('icon').src = err.body.icon;
      		document.getElementById('lang').innerHTML = err.body.language;
      		document.getElementById('page_url').innerHTML = myUrl.url;
      		document.getElementById('page_type').innerHTML = err.body.type;
      		document.getElementById('page_text').innerHTML = err.body.text;
      		document.getElementById('output').value = err.body.html;
      		document.getElementById('images').innerHTML = err.body.images.length;

    	}, function(err) {
      		console.log(err);
    	});
}