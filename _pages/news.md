---
layout:         default
title:          'Neuigkeiten'
permalink:      /news/
---
{% for post in site.posts %}
  <h2>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h2>
  {{ post.content }}
  <hr>
{% endfor %}
