---
layout: post
title:  "Using FOR loops in PLCs"
author: Toni Kucic
date:   2022-2-1 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
---
Here are some dreaded FOR loops in PLC environments. I keep hearing about how for loops make page faults and can get a PLC stuck so I decided to shed some light on the matter.
Risk of page fault is valid, if a programmer makes a mistake, but the speed of implementing multiple device controllers is worth the risk. After some experience with using loops the risk is miniscule compared to the amount of work needed to type all the instances by hand. When you become and expert you will use FOR loops for pretty much everything.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
