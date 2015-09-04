---
front-page: true
order:      99
cols:       12
screenshots:
  - img-src: http://squeakland.org/content/showcase/featured/accounts/yoshiki/AntColony.004.png
    caption: "Eine Simulation einer Ameisenkolonie. Die Ameisen orientieren sich an Gerüchen."

  - img-src: http://squeakland.org/content/showcase/featured/accounts/alan/SpeedAcceleration.013.png
    caption: "Verschiedene Typen von Beschleunigung werden modelliert und so verstanden."

  - img-src: http://squeakland.org/content/showcase/featured/accounts/yoshiki/ParticlesEpidemic.011.png
    caption: "Wie sich Krankheiten ausbreiten ist oft schwer zu verstehen. Diese Simulation macht es deutlich."

  - img-src: http://squeakland.org/content/showcase/featured/accounts/teefal/seymourQuest.012.png
    caption: "Mit Etoys kann man auch interaktive Geschichten erzählen"
---

<div id="screnshot-wrapper">
  <div class="container">
    <div id="screenshots" class="row">
      {% for screenshot in page.screenshots %}
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center slideshow-item" style="{{ currentStyle }}">
        <a href="#" class="screenshot-img">
          <img src="{{ screenshot.img-src }}" alt="" class="img-responsive img-center">
        </a>
        <p class="lead">
          {{ screenshot.caption }}
          <a href="#" class="screenshot-button pull-left" data-target="left">
            <i class="fa fa-chevron-left"></i>
          </a>
          <a href="#" class="screenshot-button pull-right" data-target="right">
            <i class="fa fa-chevron-right"></i>
          </a>
        </p>
      </div>
        {% assign currentStyle = "display: none" %}
      {% endfor %}
    </div>
  </div>
</div>
