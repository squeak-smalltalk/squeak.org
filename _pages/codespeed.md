---
layout:     fullscreen
title:      Codespeed
permalink:  /codespeed/
---

<iframe id="codespeed"
  src="https://speed.squeak.org/"
  style="position: absolute; top: 50px; left: 0px; width: 100%;"></iframe>

 <script>
  function resizeIFrame() {
    var newHeight = $(window).height() - 50 - $('footer').height();
    $('#codespeed').height(newHeight);
  }
  document.addEventListener("DOMContentLoaded", function(event) { 
    resizeIFrame();
    window.onresize = resizeIFrame;
  });
 </script>
