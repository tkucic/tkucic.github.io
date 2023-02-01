---
layout: post
title:  "Speedtest: Fastest way of combining two bytes into a integer"
author: Toni Kucic
date:   2022-3-25 22:22:19 +0300
categories: speedtest
tags : [
    plc,industrial-automation, industrial automation, iec61131-3,
    
    structuredtext,codesys]
thumbnail: /assets/post_images/codesysspeedtest.png
comments_id: 13
---
In some protocols like CAN Bus, data is split into bytes. When transporting 16 or more bit integers, they have to be assembled on the receiving end. Let's dive in and take a look, which method is fastest.

```pascal
//-------Assemble an UINT from two USINTs using SHL operator
vSHLInteger := vBuffer[0] + SHL(vBuffer[1],8);

//-------Assemble an UINT from two USINTs using MemCpy
SysMemCpy(ADR(vMcpyInteger), ADR(vBuffer) , SIZEOF(vMcpyInteger));

//-------Assemble an UINT from two USINTs by manually copying bits
vManualCpyInt.0 := vBuffer[0].0;
vManualCpyInt.1 := vBuffer[0].1;
vManualCpyInt.2 := vBuffer[0].2;
vManualCpyInt.3 := vBuffer[0].3;
vManualCpyInt.4 := vBuffer[0].4;
vManualCpyInt.5 := vBuffer[0].5;
vManualCpyInt.6 := vBuffer[0].6;
vManualCpyInt.7 := vBuffer[0].7;

vManualCpyInt.8 := vBuffer[1].0;
vManualCpyInt.9 := vBuffer[1].1;
vManualCpyInt.10 := vBuffer[1].2;
vManualCpyInt.11 := vBuffer[1].3;
vManualCpyInt.12 := vBuffer[1].4;
vManualCpyInt.13 := vBuffer[1].5;
vManualCpyInt.14 := vBuffer[1].6;
vManualCpyInt.15 := vBuffer[1].7;
```

Using the SHL operator we do get a warning from codesys. If this is bothering you, just cast the byte to a uint first. Now that will take a little bit longer. Even with the warning off, the SHL method is so much faster than all the other methods.

For MemCpy, the function overhead and pushing variables on the stack might cause it to run slower.

Manually putting bytes has been measured to be the slowest method and quite bug prone.

![Results](/assets/post_images/combine2bytestouint.png){:class="img-responsive"}

| Measur. | Time took (ms) |
|:---------:|:--------------:|
| SHL | 2.1 |
| MemCpy | 7.8 |
| Manual bit assign. | 129.4 |

One might think that all three methods are fine and they would be right. In many applications the time to execute this might not be a problem but, for communication purposes, applications with very fast cycles, even a smallest improvement in speed execution has a big impact on the overall application performance.

---
As always, the complete source code is on my [github repository](https://github.com/tkucic/codesys_code_execution_speedTests) dedicated to speed testing.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}