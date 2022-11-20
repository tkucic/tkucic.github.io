---
layout: post
title:  "Speedtest: String operations"
author: Toni Kucic
date:   2022-4-1 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
---
By popular demand, the dreaded string operations. Here are some measurements.

ResultA: Time to copy a string[255] 1000 times, 22us

ResultB: Time to copy a string 1000 times, 17us
- note here that if you dont declare a size, the strings size is max 81 chars
- why it takes less time is unclear

ResultC: Time to concatenate 1000 characters to undeclared string size, 402us

ResultD: Time to concatenate 1000 characters to string[255] size, 955us

ResultE: Time to move a byte 1000 times, 2us.
- this is for comparison

ResultF: Time to move a byte array [255] 1000 times, 19us
- this is roughly the same time as moving string[255] 1000 times
- which is expected as one character resolves to a byte, it is just a representation of the byte to be ascii string

Conclusions:
- maybe its not that bad to use strings after all
- of course if possible to use numbers instead of strings that is better memory wise and exec time wise
- this also depends on the platform the code is running, how well it handles strings but in the end its the same as if it would handle byte arrays
- one takeaway for me here was the default size of undeclared strings. this is something to look out for as you might not need all those 80 characters in a string, also be careful to have enough size so the default size doesn't chop the strings to size

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
