---
layout: post
title:  "Speedtest: Converting BOOL[1..32] to BYTE[1..4]"
author: Toni Kucic
date:   2022-10-30 21:00:00 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
comments_id: 19
---
I had a task to convert a BOOL[1..32] to 4 Bytes for some communication implementation. Profiling the previous implementation revealed most of the load was coming from this packing function so I decided to figure out the fastest way of packing.

Usually we just resort to a simple

```pascal
vInt.0 := vBool[0];
```

but the measurements say its quite slow.

Booleans in Codesys are 8bit integers underneath the hood so we can take this to our advantage.

By doing some bitwise operations and casting bool to integer I got an order of magnitude faster packing.

```pascal
vByte := 0;
vByte := vByte OR SHL(BOOL_TO_USINT(vBool[1]),0);
vByte := vByte OR SHL(BOOL_TO_USINT(vBool[2]),1);
.
.
vByte := vByte OR SHL(BOOL_TO_USINT(vBool[n]),n+1);
```

For an application that runs on a 10ms cycle, this kind of speed improvement dramatically reduces load on the CPU.

Here are the results taken on my PC, running Codesys SP18.

![Results](/assets/post_images/packingbools.png){:class="img-responsive"}

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
