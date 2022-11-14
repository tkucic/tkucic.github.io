---
layout: post
title:  "Comparing NMEA0183 Library cross platform"
author: Toni Kucic
date:   2022-9-4 22:22:19 +0300
categories: python
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3]
---
I've been playing around building a NMEA0183 simulator and by doing so I've implemented the same nmea parse library in IEC (Structured text), Python 3.10 on my local machine, Micropython on a Raspberry Pi Pico and ANSI C, both on a PLC and on my local machine.

I tested the library with the GGA(Global Positioning System Fix Data) message as it's one of the longest in the standard.

```text
$GPGGA,123519.00,4807.038,N,01131.000,E,1,08,0.9,545.4,M,-164.0,M,,,,*47
```

This is what I observed in terms of speed.

| 1,000,000 sentences | Platform | Clock speed (Mhz) | Time took (s) |
|:-------------------:|:--------:|:-----------------:|:-------------:|
| Python 3.10 | PC | 2500 | 47 |
| ANSI C | PC | 2500 | 12.7 |
| IEC (ST) | AC500 PM5650 | 600 | 6 |
| ANSI C | B&R X20CP3585 | 1000 | 7.7 |
| Micropython | RPi Pico | 133 | 19,980 |

Even though these PLCs on paper appear to be slow, the code still has to compiled. Compiling brings speed of execution, compared to Python which is an interpreted language. Still, Python is quite slow, averaging 300% slower than C.

Speed of programming -it is a different story. It took me 2 weeks to implement the same in Structured text, 3 weeks in ANSI C, while it took me couple of days to implement the same in python. Granted, my skills with Python and IEC are good, but with ANSI C, they are at begginer level, and this project was also a learning experience for me.

Flexibility and changeability - also a different story. With Python, I am able to do quite rapid changes, even during runtime, on how the library works. Dictionaries make message format selection a breeze. IEC(ST) and ANSI C have no notion of dictionaries (unless you build it yourself) so the message format selector is one giant CASE machine.

My profiling showed also that 90% of the load comes from the XOR calculation function. Each message received and sent has to be XOR checked. Here is my implementation of XOR for NMEA messages in Python and ANSI C.

```c
/*Calculates XOR checksum of an NMEA sentence
    The checksum is simple, just an XOR of all the bytes between
    the $ and the * (including the delimiters themselves),
    and written in hexadecimal.
    To test checksum:
    $GPGLL,5057.970,N,00146.110,E,142451,A*27 -> 39
    $GPVTG,089.0,T,,,15.2,N,,,*53 -> 83
    
    Function doesnt check for $/! existance to speed up execution,
    check your message is valid before calculating checksum*/
int calcXORChecksum(char* sentence){
    unsigned char i;
    int cs = 0;
    for(i=1; i<=82;++i){
        /*We end if we reach a * or null*/
        if ((sentence[i] == '*') | (sentence[i] == '\0')) {
            return cs;
        }
        if (sentence[i] != '^'){
            cs ^= sentence[i];
        }
    }
    return cs;
}
```

```python
def calcXORChecksum(sentence):
    '''The checksum is simple,
    just an XOR of all the bytes between
    the $ and the * written in hexadecimal.
    To test checksum:
    $GPGLL,5057.970,N,00146.110,E,142451,A*27
    $GPVTG,089.0,T,,,15.2,N,,,*53'''
    #to improve speed, split sentence on * and cast it to bytearray
    bArr = bytearray(sentence.partition('*')[0].encode())
    cs = 0
    for char in bArr:
        if char not in (36,33,94): # ('$', '!', '^')
            cs ^= char
    return cs
```

First Python version had the identical code as in the C example and that made the calculation 400% slower. I ended up using quite a hacky code to improve the speed dramatically as it removed one whole branch from the loop.

Let me know if you find a better algorithm for calculating XORs!

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
