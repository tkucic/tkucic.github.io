---
layout: post
title:  "Intro to Codesys script engine"
author: Toni Kucic
date:   2022-1-1 22:22:19 +0300
categories: programming
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
---
So I'm doing some scripting in CODESYS again, mostly porting and generating POUs. Now I noticed the script execution time is quite long, approx. 13 minutes for 331 pous. Roughly 4 seconds per POU is quite slow when the Python generated code takes 1 ms to generate all the code and objects.

Does anyone have any tips and tricks how to increase the speed of the script engine in CODESYS?

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
