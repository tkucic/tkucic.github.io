---
layout: post
title:  "Speedtest: Integer vs Floating point math"
author: Toni Kucic
date:   2022-4-10 22:22:19 +0300
categories: speedtest
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
thumbnail: /assets/post_images/codesysspeedtest.png
comments_id: 15
---
Wise man said "Don't use REAL for math if not necessary!". Let's see if that still holds in 2022.

In some PLCs that don't support floating point operations, all the math is done with integers. The usual way of representing REAL would be to multiply by 10 at the source and divide by 10 at the destination (or after calculation). In this way we are able to get only single decimal precision. If your application requires more precision, then just increase the divisors and multiplicators to get the desired effect.

It is 2022, let's measure this on some machines to see how they compare. Now, my PLCs at home all have floating point units so the expectation is that Integer and real math are similar in execution speeds.

#### Addition/Subtraction

```pascal
//------------Time to add two 16 bit integers 1 000 000 times -------------------
vTest1.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult1 := vInteger1 + vInteger2;
END_FOR
vTest1.ExecTime := LTIME() - vTest1.OldTime;

//------------Time to add two reals 1 000 000 times -------------------
vTest2.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult2 := vReal1 + vReal2;
END_FOR
vTest2.ExecTime := LTIME() - vTest2.OldTime;

//------------Time to add two 32 bit integers 1 000 000 times -------------------
vTest3.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult3 := vInteger3 + vInteger4;
END_FOR
vTest3.ExecTime := LTIME() - vTest3.OldTime;
```

#### Multiplication

```pascal
//------------Time to multiply two 16 bit integers 1 000 000 times -------------------
vTest4.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult4 := vInteger1 * vInteger2;
END_FOR
vTest4.ExecTime := LTIME() - vTest4.OldTime;

//------------Time to multiply two reals 1 000 000 times -------------------
vTest5.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult5 := vReal1 * vReal2;
END_FOR
vTest5.ExecTime := LTIME() - vTest5.OldTime;

//------------Time to multiply two 32 bit integers 1 000 000 times -------------------
vTest6.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult6 := vInteger3 * vInteger4;
END_FOR
vTest6.ExecTime := LTIME() - vTest6.OldTime;
```

#### Division

```pascal
//------------Time to divide two 16 bit integers 1 000 000 times -------------------
vTest7.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult7 := vInteger1 / vInteger2;
END_FOR
vTest7.ExecTime := LTIME() - vTest7.OldTime;

//------------Time to divide two reals 1 000 000 times -------------------
vTest8.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult8 := vReal1 / vReal2;
END_FOR
vTest8.ExecTime := LTIME() - vTest8.OldTime;

//------------Time to divide two 32 bit integers 1 000 000 times -------------------
vTest9.OldTime := LTIME();
FOR i:= 0 TO cRepeatCalcTimes DO
    vResult9 := vInteger3 / vInteger4;
END_FOR
vTest9.ExecTime := LTIME() - vTest9.OldTime;
```

### Conclusion

Addition and multiplication of INT/REAL/DINT had no real impact other than memory consumption.

Division is a bit different though. Seems REAL is a whole millisecond faster than any integer division. Could it be that the compiler casts these integers to reals under the hood or what is happening here? It is probably that the compiler has to have an extra step to do the actual division.

I have been told many times that we need to choose data type sizes that match our PLC. If the PLC is a 32bit processor we should use only DINTs, otherwise if its a 16 bit processor, then INTs. It's quite hard to find a 16bit computer in 2022, does the statement still hold? The measurements show equal(within measurement tolerance) times for INTs and DINTs. Shouldn't the ALU just pad an INT will zeros for the most significant bits?

Of course these measurements are done on my PC with Codesys Simulation mode on so the measurements will wary from PC to PC, PLC to PLC.

![Results](/assets/post_images/floatingpointops.png){:class="img-responsive"}

| Measur. | Time took (ms) |
|:---------:|:--------------:|
| Add two ints 1 000 000x | 2.108 |
| Add two dints 1 000 000x | 2.134 |
| Add two reals 1 000 000x | 2.136 |
|  |  |
| Multiply two ints 1 000 000x | 2.188 |
| Multiply two dints 1 000 000x | 2.137 |
| Multiply two reals 1 000 000x | 2.125 |
|  |  |
| Divide two ints 1 000 000x | 3.993 |
| Divide two dints 1 000 000x | 4.067 |
| Divide two reals 1 000 000x | 2.455 |

---
As always, the complete source code is on my [github repository](https://github.com/tkucic/codesys_code_execution_speedTests) dedicated to speed testing.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}