---
title:      Links
front-page: true
order:      100
cols:       6

urls:
  - src: squeakland.org
    caption: "Etoys Homepage (Englisch)"

  - src: bertfreudenberg.github.io/SqueakJS/etoys/
    caption: "Etoys im Browser"

  - src: scratch.mit.edu
    caption: "Scratch Homepage (Englisch)"

  - src: scratch-dach.info
    caption: "Deutsches Scratch Wiki"

  - src: scratched.media.mit.edu
    caption: "ScratchEd - Lehren und Lernen mit Scratch (Englisch)"

---
<div class="container">
<ul>
{% for url in page.urls %}
<li><a href="{{ url.src }}">{{ url.caption }}</a></li>
{% endfor %}
</ul>
</div>
