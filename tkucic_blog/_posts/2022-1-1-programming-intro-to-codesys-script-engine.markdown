---
layout: post
title:  "Latching in ST"
author: Toni Kucic
date:   2022-1-12 22:22:19 +0300
categories: programming
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
---
Here is one way how to implement a latch in structured text with some examples.

PS: You can also use an SR block.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
