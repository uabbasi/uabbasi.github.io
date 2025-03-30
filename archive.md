---
title: Archive
permalink: /archive/
layout: page
---

<ul class="archive-list">
  {% for post in site.posts %}
    <li>
      <time datetime="{{ post.date }}" class="catalogue-time">{{ post.date | date: "%B %d, %Y" }}</time>
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .archive-list {
    list-style: none;
    padding-left: 0;
  }
  
  .archive-list li {
    margin-bottom: 1rem;
  }
  
  .archive-list .catalogue-time {
    display: block;
    font-size: 0.8rem;
    color: var(--text-color);
    opacity: 0.8;
    margin-bottom: 0.2rem;
  }
</style>