---
layout: post
title:  "Speedtest: IF-ELSIF vs CASE"
author: Toni Kucic
date:   2022-4-13 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
---

Multiple authors and developers recommend using CASE over long IF ELSIF sentences. Lets see why.

The implementation of measurements is identical for IF-ELSIF and CASE. I created a method that returns the index of the value we are searching for. Both case and if-elsif methods are pseudohashmaps which have one branch per index. For simplicity, I created indexes from 0 to 100.

```pascal
CASE searchValue OF

    0: returnIndexCase := 0;
    RETURN;

    1: returnIndexCase := 1;
    RETURN;

    2: returnIndexCase := 2;
    RETURN;

    3: returnIndexCase := 3;
    RETURN;
.
.
.
```

```pascal
IF searchValue = 0 THEN
    returnIndexIfElsif:=0;
    RETURN;

ELSIF searchValue = 1 THEN
    returnIndexIfElsif:= 1;
    RETURN;

ELSIF searchValue = 2 THEN
    returnIndexIfElsif:= 2;
    RETURN;

ELSIF searchValue = 3 THEN
    returnIndexIfElsif:= 3;
    RETURN;
.
.
.
```

IF ELSIF is as fast as CASE if the index to find is in the first IF sentence. If it is not, the time to find the index was linear O(n).

CASE shows that it is always constant time O(1). CASE is a lookup table underneath. The time to retrieve the index is always the same regardless of having 10 or 1000 cases.

Measurements show that IF ELSIF starts to be slower than CASE almost immediately after 2 branches.

![Results](/assets/post_images/casevsifelsif.png){:class="img-responsive"}

| Measur. | Time took (ms) |
|:---------:|:--------------:|
| IF-ELSIF First index | 17.6 |
| IF-ELSIF Mid index  | 43.5 |
| IF-ELSIF Last index | 83.6 |
| CASE First index | 16.3 |
| CASE Mid index  | 16.15 |
| CASE Last index | 17.25 |

With IF ELSIF sentences that have low amount of branches you might get away with it but for higher amount the CASE is a much better approach.

---
As always, the complete source code is on my [github repository](https://github.com/tkucic/codesys_code_execution_speedTests) dedicated to speed testing.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
