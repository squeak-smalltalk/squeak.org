---
title:      BroBreakout
img-src:    projects/brobreakout.png
img-border: true
href:       https://github.com/fniephaus/BroBreakout
---
A Breakout clone

<a tabindex="0" class="btn btn-xs btn-primary" role="button" data-toggle="popover" title="BroDCPU Quick Install" data-target="#brodcpu-qi"><i class="fa fa-code"></i> Quick Install</a>

<div id="brodcpu-qi" class="hide">
{% highlight smalltalk %}
Metacello new
  baseline: 'BroDCPU';
  repository: 'github://fniephaus/BroDCPU:master/packages';
  onConflict: [:ex | ex allow];
  load
{% endhighlight %}

Make sure you have <a href="https://github.com/dalehenrich/metacello-work" target="_blank">Metacello</a> installed.
</div>