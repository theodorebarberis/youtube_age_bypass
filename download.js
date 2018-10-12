var x= String(document.location);
var rs = x.substr(x.length - 11);
var element = document.getElementsByClassName("iframe-container");



element[0].innerHTML = '<iframe width="250px" height="60px" scrolling="no" style="border:none;" src="https://www.download-mp3-youtube.com/api/?api_key=MzQ3NzM3MzUy&format=mp3&video_id=' + rs + '"></iframe>';
