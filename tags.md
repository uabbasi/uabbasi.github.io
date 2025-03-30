---
title: Tags
permalink: /tags/
layout: page
excerpt: All stories categorized by tags.
---

{% for tag in site.tags %}
  <div class="archive-group">
    {% capture tag_name %}{{ tag | first }}{% endcapture %}
    <h3 id="#{{ tag_name | slugize }}">{{ tag_name }}</h3>
    <a name="{{ tag_name | slugize }}"></a>
    {% for post in site.tags[tag_name] %}
    <article class="archive-item">
      <span class="post-date archive-date">
        {{ post.date | date: "%b %d, %Y" }}
      </span>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </article>
    {% endfor %}
  </div>
{% endfor %}