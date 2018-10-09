// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file. chrome-extension://cocjjdfbfepdkbmaiajhlcnoodbhaiai/view.html?videoID=xgP_2zf0NV8

// <iframe id="viewer" width="420" height="345" src="/index.html" >

		
var x= String(document.location);
var rs = x.substr(x.length - 11);
var w = window.innerWidth-30;
var h = window.innerHeight-30;
var element = document.getElementsByClassName("iframe-container");
//element.innerHTML = '<iframe id="viewer" width="420" height="345" src="https://www.youtube.com/embed/' + rs + '" frameborder="0" allowfullscreen>';


element[0].innerHTML = '<iframe id="viewer" width="'+ w +'" height="'+ h +'" src="https://www.youtube.com/embed/' + rs + '" frameborder="0" allowfullscreen>';