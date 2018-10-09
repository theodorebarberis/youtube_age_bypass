// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
//alert("hello");
var urlT,vars,site;

chrome.tabs.getSelected(null, function(tab) {
	var checkPageButton = document.getElementById('btn-run');
		
		urlT=tab.url;
		vars = urlT.split("v=");
		site = vars[0];
		if(site=="https://www.youtube.com/watch?"){
			checkPageButton.disabled = false;
		}
		else{
			checkPageButton.disabled = true;
		}
});
document.addEventListener('DOMContentLoaded', function() {
 var checkPageButton = document.getElementById('btn-run');
  checkPageButton.addEventListener('click', function() {

		var r=vars[1].split("&");
		var video = r[0];
	
			window.open("view.html?videoID=" + video);
		
    
  }, false);
}, false);