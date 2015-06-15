---
title:      Aida
img-src:    projects/aida.svg
href:       http://www.aidaweb.si/
---
Aida is a Smalltalk web application framework for building web applications. It seamlessly integrates HTML5 technologies for today's real-time Web.


<a tabindex="0" class="btn btn-xs btn-primary" role="button" data-toggle="popover" title="Aida Quick Install" data-target="#aida-qi"><i class="fa fa-code"></i> Quick Install</a>

<div id="aida-qi" class="hide">
{% highlight smalltalk %}
i := Installer monticello http: 'http://smalltalkhub.com'. 
i    project: 'mc/Sport/Sport/main'; 
     install: 'Sport-2.031'.
i    project: 'mc/Swazoo/Swazoo/main'; 
     install: 'Swazoo-2.3final.2'.
i    project: 'mc/Aida/Aida/main';
     install: 'Aida6.6-final.3'.
{% endhighlight %}
</div>