(function(){
	var date = new Date().getFullYear();
	
	currentyear.innerHTML = date;

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