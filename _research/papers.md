---
order:      2
---

{% assign current_year = site.time | date: '%Y' | times: 1 %}
{% for i in (1996..current_year) reversed %}
  {% capture bibpart %}{% bibliography --query @*[year={{i}}] %}{% endcapture %}
  {% if bibpart != '<ol class="bibliography"></ol>' %}<h2>{{ i }}</h2>{{ bibpart }}{% endif %}
{% endfor %}
