---
layout: post
title:  "Speedtest: ST vs LADDER vs FBD vs CFC"
author: Toni Kucic
date:   2022-6-15 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
comments_id: 17
---
This time on measuring interesting code blocks, Ladder Vs FBD Vs ST Vs CFC. Which one is faster?

I made simple add two integer functions in each language codesys supports and the results were a bit confusing. SFC is not possible inside of functions so it was ommitted from the measurements.

The expectation was that each of these IEC languages get similary compiled to machine code and that they would have the same speed of execution. The compiled code would hold the same instructions to the PLC hardware.

So, I created functions for each language. This is to remove the function overhead from the measurumenets and also because my measurement framework is working on ST. I didn't want to refactor my whole framework. It is not possible ofcourse, to run all the languages under one program, unless they are in the functions.

The function is a simple a + b calculation, followed by and assignment to the function result. Then the value gets returned back to the calling program.

The results vary from machine to machine but these are the results I got.

| Lang | Time took (ms) | Average accross 5 runs(ms) |
|:----:|:--------------:|:--------------------------:|
| ST | 3.959 - 5.228 | 4.816 |
| LAD | 5.26 - 7.59 | 6.184 |
| FBD | 3.9 - 4.7 | 4.256 |
| CFC | 3.9 - 4.7 | 4.256 |

When running these measurements many times the trend was that the Ladder was the slowest, ST second best, FBD and CFC identical run times, running the fastests.

![Results](/assets/post_images/ladvsfbvsst_results.png){:class="img-responsive"}
![Results](/assets/post_images/laddervsfbdvsst.png){:class="img-responsive"}

---
As always, the complete source code is on my [github repository](https://github.com/tkucic/codesys_code_execution_speedTests) dedicated to speed testing.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
