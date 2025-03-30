---
title: Anthologies
permalink: /anthologies/
layout: page
---

<div class="anthologies">
  {% for category in site.categories %}
    <div class="anthology">
      {% capture category_name %}{{ category | first }}{% endcapture %}
      <h2 id="{{ category_name | slugify }}">{{ category_name }}</h2>
      <div class="anthology-description">
        {% case category_name %}
          {% when "Science Fiction" %}
            <p>Stories that explore the impact of science and technology on society, set in imagined futures or alternate realities.</p>
          {% when "Fantasy" %}
            <p>Tales of magic, mythical creatures, and imaginary worlds where the impossible becomes possible.</p>
          {% when "Literary" %}
            <p>Character-driven narratives that examine the human condition and the complexities of everyday life.</p>
          {% when "Flash Fiction" %}
            <p>Extremely short stories that tell a complete narrative in just a few hundred words.</p>
          {% else %}
            <p>A collection of stories in the {{ category_name }} genre.</p>
        {% endcase %}
      </div>
      
      <div class="anthology-stories">
        {% for post in site.categories[category_name] %}
          <div class="anthology-story">
            <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
            <div class="anthology-meta">
              <time datetime="{{ post.date }}">{{ post.date | date: "%B %d, %Y" }}</time>
              {% if post.description %}
                <p class="description">{{ post.description }}</p>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>

<style>
  .anthology {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
  }
  
  .anthology:last-child {
    border-bottom: none;
  }
  
  .anthology-description {
    margin-bottom: 1.5rem;
    font-style: italic;
    color: var(--text-color);
    opacity: 0.9;
  }
  
  .anthology-stories {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .anthology-story {
    padding: 1.25rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .anthology-story:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  
  .anthology-story h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
  }
  
  .anthology-meta {
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0.8;
  }
  
  .anthology-meta .description {
    margin-top: 0.5rem;
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    .anthology-stories {
      grid-template-columns: 1fr;
    }
  }
</style>