---
title: long scroll
permalink: /all
layout: default
---
{% for post in site.posts reversed %}
  <h2><a href="{{ post.url }}"><span class="post_date">{{ post.date | date: "%m.%d.%y"}}</span><span class="post_title">{{ post.title }}</span></a></h2>
  {{ post.content }}
  <div style="height: var(--content_margin)"></div>
{% endfor %}
