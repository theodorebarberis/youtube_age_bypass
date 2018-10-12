// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
//alert("hi motherf@cker");
var urlT,vars,site;

chrome.tabs.getSelected(null, function(tab) {
	var checkPageButton = document.getElementById('btn-run');
  var checkPageButton2 = document.getElementById('btn-dwn');
		urlT=tab.url;
		vars = urlT.split("v=");
		site = vars[0];
		if(site=="https://www.youtube.com/watch?"){
			checkPageButton.disabled = false;
			checkPageButton2.disabled = false;
		}
		else{
			checkPageButton.disabled = true;
			checkPageButton2.disabled = true;
		}
});
document.addEventListener('DOMContentLoaded', function() {
 var checkPageButton = document.getElementById('btn-run');
  checkPageButton.addEventListener('click', function() {

		var r=vars[1].split("&");
		var video = r[0];

			window.open("view.html?videoID=" + video);


  }, false);


	var checkPageButton2 = document.getElementById('btn-dwn');
   checkPageButton2.addEventListener('click', function() {

 		var r=vars[1].split("&");
 		var video = r[0];

 			window.open("download.html?videoID=" + video);


   }, false);


}, false);
