---
layout: post
title:  "Speedtest: Integer vs Real math"
author: Toni Kucic
date:   2022-4-10 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
---
In some PLCs that don't support floating point operations, all the math is donme with integers. Let's see how we could measure and compare the two.

Quite interesting findings on my local machine and my home PLCs. 

### Addition/Subtraction

### Division and Multiplication

Addition and multiplication of INT/REAL/DINT had no real impact other than memory consumption.

Division is a bit different though. Seems REAL is much faster than any integer division. Could it be that the compiler casts these integers to reals under the hood or what is happening here?

Of course these measurements are done on my PC with Codesys Simulation mode on so the measurements will wary from PC to PC, PLC to PLC.

![Results](/assets/post_images/floatingpointops.png){:class="img-responsive"}

| Measur. | Time took (ms) |
|:---------:|:--------------:|
| IF-ELSIF First index | 17.6 |
| IF-ELSIF Mid index  | 43.5 |
| IF-ELSIF Last index | 83.6 |
| CASE First index | 16.3 |
| CASE Mid index  | 16.15 |
| CASE Last index | 17.25 |


---
As always, the complete source code is on my [github repository](https://github.com/tkucic/codesys_code_execution_speedTests) dedicated to speed testing.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
