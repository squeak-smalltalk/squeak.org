---
title:      Metacello
img-src:    projects/metacello.png
img-border: true
href:       https://github.com/dalehenrich/metacello-work#squeak
---
A package management system for Squeak/Smalltalk


<a tabindex="0" class="btn btn-xs btn-primary" role="button" data-toggle="popover" title="Metacello-work Quick Install" data-target="#metacello-qi"><i class="fa fa-code"></i> Quick Install</a>

<div id="metacello-qi" class="hide">
{% highlight smalltalk %}
Installer swasource
  project: 'SwaUtilities';
  addPackage: 'ConfigurationOfMetacello';
  install.

"Bootstrap Metacello Preview, using mcz files (#'previewBootstrap' symbolic version"
((Smalltalk at: #ConfigurationOfMetacello) project version: #'previewBootstrap') load.
{% endhighlight %}
</div>