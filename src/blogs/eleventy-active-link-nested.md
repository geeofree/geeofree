---
title: 11ty Nested URL Active Links
description: How to set active links in nested URLs in 11ty.
tags:
  - guides
  - eleventy
---

Here is a shortcode to set an anchor link as active even 
under nested URL paths (ie. `/notes`, `/notes/foo`, `/notes/foo/bar`, etc.):

```js
module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode('isActiveLink', function(url) {
    if (url === this.page.url) return '<active-link-class>'
    if (url !== '/' && this.page.url.includes(url)) return '<active-link-class>'
    return ''
  })
}
```

We can access the [page](https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable) object within the shortcode if we provide 
the callback as a normal, non-arrow function (this was added in 
11ty [v0.11.0](https://github.com/11ty/eleventy/releases/tag/v0.11.0)).

Example usage:

```html
{% raw %}
{% for collection in collections.<collection> %}
<a
  href="{{ collection.url }}"
  class="{% isActiveLink collection.url %}"
>
  {{ collection.url }}
</a>
{% endfor %}
{% endraw %}
```
