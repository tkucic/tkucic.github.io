---
layout: post
title:  "Speedtest: Fastest way of combining two bytes into a integer"
author: Toni Kucic
date:   2022-3-25 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
---
I was playing around a bit measuring some code execution times with codesys soft PLC. Now, the actual times will differ from system to system but I was looking for drastic differences.

Fun/method overhead
It seems the function and method calls introduce quite some overhead. By these calculations it takes twice as long to run same code in a function/method.

Copying empty struct versus memset
Empty struct a bit faster than memset apart from taking more memory. It seems MOV instructions are faster than memset.

Combining 8 bit numbers to 16 bit numbers. e.g in CAN and Modbus
Here I was surprised to see a very big difference in memcpy and SHL instructions. Seems the memcpy introduces quite some overhead here. SHL throws a warning for USINTs but it works much much faster.

Using LTIME is quite easy to calc execution time as it returns a 64bit time value. TIME also works but the smallest time is a milisecond.

Any other ways to calculate code execution time?

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
