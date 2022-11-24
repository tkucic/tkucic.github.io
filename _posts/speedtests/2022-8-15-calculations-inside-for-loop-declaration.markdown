---
layout: post
title:  "Speedtest: Calculations inside loop declarations"
author: Toni Kucic
date:   2022-8-15 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
comments_id: 18
---
Something interesting I found while parsing some strings. Behavior of calculations inside of FOR loops.

While doing some optimizations I realized one part of my string parser was running super slow over a 82 char string. After some debugging I found that the LEN() function(returns the length of the string), if called in the FOR loop declaration it counts the characters every loop.
Calculations in lower/upper bounds of FOR loops should be avoided if possible.

![Results](/assets/post_images/timeToIterate.png){:class="img-responsive"}

| 108 chars | Time took (ms) |
|:---------:|:--------------:|
| Consts, 0 to 108 | 164 |
| 0 to LEN(str) | 19660 |
| 0 to LEN(str), calculated before loop | 184 |

So one line of code can make your code run 111x faster.

### MEASUREMENT CODE

```pascal
//------------KNOWING LENGTH IN ADVANCE -------------------
vTest1.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    FOR j:= 0 TO 108 DO
        vResult := vLongString[j];
    END_FOR
END_FOR
vTest1.ExecTime := LTIME() - vTest1.OldTime;

//------------CALCULATING LENGHT IN THE DECLARATION--------
vTest2.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    FOR j:= 0 TO LEN(vLongString) DO
        vResult := vLongString[j];
    END_FOR
END_FOR
vTest2.ExecTime := LTIME() - vTest2.OldTime;

//------------CALCULATING LENGHT BEFORE LOOPING -------------------
vTest3.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vLenOfString := LEN(vLongString);
    FOR j:= 0 TO vLenOfString DO
        vResult := vLongString[j];
    END_FOR
END_FOR
vTest3.ExecTime := LTIME() - vTest3.OldTime;
```

In real life, array lenghts are not always known so lets write some PROs and CONs of each type of looping code presented.

### KNOWING LENGTH IN ADVANCE

```text
+ FAST
- IF \0 STRING CHANGES DURING LOOPING, 
  ITERATING FOR NO REASON (ADD EXIT CLAUSE IN THIS CASE)
- ITERATES TO 108 char REGARDLESS WHERE THE STRING ENDSS
- CAN READ OUT OF BOUNDS (IF LENGHT OF VARIABLE CHANGES)
- LENGHT NOT ALWAYS KNOWN
```

### CALCULATING LENGHT IN THE DECLARATION

```text
+ SAFE LENGHT CALCULATION
+ IF \0 STRING CHANGES DURING LOOPING, STILL SAFE
- SUPER SLOW AS LOOP EVALUATES LEN() EVERY LOOP
```

### CALCULATING LENGHT BEFORE LOOPING

```text
+ ALMOST AS FAST KNOWING THE LENGHT
- IF \0 STRING DECREASES DURING LOOPING, 
  ITERATING FOR NO REASON (ADD EXIT CLAUSE IN THIS CASE)
- REQUIRES A HELPER VARIABLE (MEMORY)
```

Wise man said once  to use the appropriate tool for the job, it seems the advice still holds.

---
As always, the complete source code is on my [github repository](https://github.com/tkucic/codesys_code_execution_speedTests) dedicated to speed testing.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
