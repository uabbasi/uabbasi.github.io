---
title: Archive
permalink: /archive/
layout: page
excerpt: All stories I've written.
---

<div class="archive-tags">
  <a href="/tags/">Browse by Tag</a>
</div>

{% for post in site.posts %}
<div class="archive-item">
  <span class="post-date archive-date">
    {{ post.date | date: "%b %d, %Y" }}
  </span>
  <a href="{{ post.url }}" class="archive-title">
    {{ post.title }}
  </a>
</div>
{% endfor %}