---
title:      Seaside
img-src:    projects/seaside.png
href:       http://www.seaside.st/
---
Seaside provides a layered set of abstractions over HTTP and HTML, that let you build highly interactive web applications.

<!--
It is ported to and maintained for several Smalltalk dialects.
-->

<a tabindex="0" class="btn btn-xs btn-primary" role="button" data-toggle="popover" title="Seaside Quick Install" data-target="#seaside-qi"><i class="fa fa-code"></i> Quick Install</a>

<div id="seaside-qi" class="hide">
{% highlight smalltalk %}
Installer squeaksource
    project: 'MetacelloRepository';
    install: 'ConfigurationOfSeaside3'.
(Smalltalk at: #ConfigurationOfSeaside3) load.
{% endhighlight %}
</div>