---
layout: post
title:  "Speedtest: String operations"
author: Toni Kucic
date:   2022-4-1 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
comments_id: 14
---
By popular demand, the dreaded string operations. Here are some measurements.

First we need to get some baseline measurements.

#### Time to copy a string[255] 1 time, ~24ms

```pascal
//------------Time to copy a string[255] -------------------
vTest1.OldTime := LTIME();
vResult1 := vString1;
vTest1.ExecTime := LTIME() - vTest1.OldTime;
```

NOTE: This will be used in the following measurement, to prove a point

#### Time to copy a string with no length defined, ~19ms

```pascal
//------------Time to copy a string -------------------
vTest2.OldTime := LTIME();
vResult2 := vString2;
vTest2.ExecTime := LTIME() - vTest2.OldTime;
```

NOTE: if you don't declare a size, the strings size is max 81 chars. Why it takes less time is unclear

#### Time to concatenate 1 Million times characters with undefined length STRING, ~371ms

```pascal
//------------Time to concatenate 1 Million times characters with STRING -------------------
vTest3.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult3 := CONCAT(vResult3, vString3);
END_FOR
vTest3.ExecTime := LTIME() - vTest3.OldTime;
```

#### Time to concatenate 1 Million times  characters with STRING[255], ~818ms

```pascal
//------------Time to concatenate 1 Million times  characters with STRING[255] -------------------
vTest4.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult4 := CONCAT(vResult4, vString4);
END_FOR
vTest4.ExecTime := LTIME() - vTest4.OldTime;
```

#### Time to move a byte 1 Million times, ~2ms

```pascal
//------------Time to move a byte 1 Million times -------------------
vTest5.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult5 := vByte;
END_FOR
vTest5.ExecTime := LTIME() - vTest5.OldTime;
```

NOTE: This is for comparison in the following measurement

#### Time to copy an array of 255 BYTE 1 Million times, ~22us

```pascal
//------------Time to copy an array of 255 BYTE 1 Million times -------------------
vTest6.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult6 := vArrByte;
END_FOR
vTest6.ExecTime := LTIME() - vTest6.OldTime;
```

NOTE: This is roughly the same time as moving string[255] 1 000 000 times which is expected as one character resolves to a byte, it is just a representation of the byte to be ASCII string

#### Conclusions

Maybe its not that bad to use strings after all. Of course, if it is possible to use numbers instead of strings, it would be better as the memory and execution time is decreased. This also depends on the platform the code is running, how well it handles strings but in the end it's the same as if it would handle byte arrays.

Now, what people usually mean when saying "Don't use strings in the code" is:

```text
Don't use strings to represent information that can be represented in numbers!
```

Strings are meant for Operators and humans. It is much nicer to get this information so our brains can easily interpret. Computers don't know what strings even are, they just see numbers. So if you want to indicate a broken sensor, alarms, warnings etc, use numbers internally and in the display task/application, convert those to text with a pre-programmed hash map string arrays.

One takeaway for me here was, the default size of undeclared strings. This is something to look out for as you might not need all those 80 characters in a string, also be careful to have enough size so the default size doesn't chop the strings to size.

![Results](/assets/post_images/stringoperations.png){:class="img-responsive"}

| Measur. | Time took (ms) |
|:---------:|:--------------:|
| Time to copy a string[255] 1 million times | 24.9 |
| Time to copy a string of undeclared length 1 million times  | 19.21 |
| Time to concatenate 1 million characters with undeclared length string | 371.3 |
| Time to concatenate 1 million characters with string[255] | 818.6 |
| Time to move a byte 1 million times  | 2.5 |
| Time to copy and array of 255 bytes, 1 million times | 22.5 |

---
As always, the complete source code is on my [github repository](https://github.com/tkucic/codesys_code_execution_speedTests) dedicated to speed testing.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}