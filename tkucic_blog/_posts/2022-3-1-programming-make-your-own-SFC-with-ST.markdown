---
layout: post
title:  "Make your own SFC framework with ST"
author: Toni Kucic
date:   2022-3-1 22:22:19 +0300
categories: programming
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
---
Did you know that you can build your own SFC framework using ST and CASE statement?

This gives the developer maximum flexibility when handling the steps but it requires more code to be written and maintained.

High level readability of SFC is much better but it also hides code in actions. In ST you can write the whole code in a flat structure, straight in the state machine. With the use of state machine templates the code overhead can be lowered greatly.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
