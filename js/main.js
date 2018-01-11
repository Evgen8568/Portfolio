appSeting = {
	baseApiUrl: 'https://my-json-server.typicode.com//Evgen8568/Portfolio'
}

(function(){
	var date = new Date().getFullYear();
	
	currentyear.innerHTML = date;

}());

(function(){
if(screen.width > 800) { // Animate navigation
			$(document).ready(function() {
			// функцию скролла привязать к окну браузера
				$(window).scroll(function(){
					var distanceTop = $('#slideMenu').offset().top;
					if ($(window).scrollTop() >= distanceTop)
						$ ('nav').attr ("id", "fixed");
					else //if ($(window).scrollTop() < distanceTop)
						$ ('nav').attr ("id", "nav");
				});
			});
		}
}());
		
/*init();

function init(){
	loadPageContent();
}

function loadPageContent(){
    var pageName = getQueryStrinParam('page') || 'about';
    var request = new XMLHttpRequest();
    request.open('GET', `content/${pageName}.html`, true);
    request.onreadystatechange = function(){
        if (this.readyState !== 4){
            return;
        }

        var html = this.responseText;
        document.getElementById('content').innerHTML = html;
    };

    request.send();
}

function getQueryStrinParam(name) {
    var reg = new RegExp('[?&]' + name + '=([^&#]*)', 'i');
    var string = reg.exec(window.location.href);
    return string ? string[1] : null;
}*/