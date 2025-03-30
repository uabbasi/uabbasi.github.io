---
title: Tags
permalink: /tags/
layout: page
---

<div class="tags-list">
  {% for tag in site.tags %}
    <div class="tag-group">
      {% capture tag_name %}{{ tag | first }}{% endcapture %}
      <h2 id="{{ tag_name | downcase | slugify }}">{{ tag_name }}</h2>
      <ul class="posts-list">
        {% for post in site.tags[tag_name] %}
          <li>
            <a href="{{ post.url | prepend: site.baseurl }}">
              {{ post.title }}
              <small class="post-date">{{ post.date | date_to_string }}</small>
            </a>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

<style>
  .tags-list {
    width: 100%;
  }
  .tag-group {
    margin-bottom: 2rem;
  }
  .tag-group h2 {
    margin-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
  }
  .posts-list {
    list-style-type: none;
    padding-left: 0;
  }
  .posts-list li {
    margin-bottom: 0.5rem;
  }
  .post-date {
    display: inline-block;
    margin-left: 0.5rem;
    color: var(--text-color);
    opacity: 0.8;
  }
</style>