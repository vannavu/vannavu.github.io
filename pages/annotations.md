---
title: Annotations
permalink: /annotations/
layout: annotations
---

{% for post in site.posts %}
  <h2>{{ post.title }}<span class="post_date">{{ post.date | date: "%m.%d.%Y"}}</span></h2>
  {{ post.content }}
{% endfor %}
