---
title: Annotations
permalink: /annotations/
layout: annotations
---

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}<span class="post_date">{{ post.date | date: "%m.%d.%Y"}}</span></a></h2>
  {{ post.excerpt }}
  {% if post.excerpt != post.content %}
  <a href="{{ post.url }}"><i>Continue reading</i></a>
  {% endif %}
  <div style="height: var(--content_margin)"></div>
{% endfor %}
