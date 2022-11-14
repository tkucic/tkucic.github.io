---
layout: post
title:  "Speedtest: Memory manipulation with SysMem Lib"
author: Toni Kucic
date:   2022-2-15 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
---
This time something more advanced, memory manipulation.

Few examples on how to use MemSet, MemCpy in a PLC environment with some examples of the common faults and risk involved.

These examples are using Codesys and their MemUtils library.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
