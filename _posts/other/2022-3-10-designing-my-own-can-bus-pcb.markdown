---
layout: post
title:  "Designing my own Can Bus breakout board"
author: Toni Kucic
date:   2022-3-10 22:22:19 +0300
categories: other
tags : [
    plc, industrial-automation, industrial automation, iec61131-3,
    
    can-bus, canbus, canopen, electronics]
---
I had an idea to try and make a Power and signal bus for my home CAN network. It was a quite a bumpy ride to make these but the idea I was testing works. Bumpy as in "I have no idea what I am doing". This is how it went.

Problem I wanted to solve
I wanted to make my life a bit easier and cleanup the CAN network I created along the way on my desk. Quite often, I have the need to plug and unplug the nodes from the network. Each node has a different connector as in the network there are PLCs, Arduino boards and CAN analyzers. On top of the CAN network, each device requires some kind of a power supply, either 5V or 24V which makes me pull two different cables sets, making my compact network look like a jungle. As per CiA recommendations, all the nodes should be daisy chained to reduce amount of signal reflections etc. While this is good in a production environment, on my home CAN network I need to rewire half of the bus, annoying!
Testing the idea
I thought a bus approach could be better as CAN specs support power transfer, usually up to 30V. Quite quickly in the project, I realized I am actually doubling the amount of cabling needed :D. With daisy chaining, all the nodes are connected in parallel to the bus in their connectors. With the bus solution I combined the power and the signal cables, cleaned up the whole setup a bit but in the end the solution doubles the amount of cables as the paralleling is done on the bus connector. Now each device has its own cable that delivers CAN signals and Power. But is it worth it for the sake of flexibility?
Would it work?
After reading a lot about the physical CAN layer I realized that a bus like this one probably wouldn't work in a real environment due:
90deg turns causing reflection
trace impedance is hard to get to 120Ohms as per standard 120Ohms impedance is needed. Also the termination resistance must match the cable properties.
possible noise
amount of cabling needed
The recommendations are there to make cable selection easier and to follow the standard. CAN must work up to 1Mbits where the quality of cabling and connectors come into play. For my network this bus approach works only because my cables are 10cm in length. For longer distances it is better to just stick to daisy chaining and using the proper cable.

The actual build
No alt text provided for this image
So, with the background info behind us, I decided to buy a perforated circuit board before ordering anything permanent. Going in, I had no idea what R3,08 or R5 means and I just wanted a 5 pin screw terminal and something to solder it to. To my surprise, when the items came, I noticed, the terminals connector pins don't fit into the perfboard :D. I got lucky when I figured out I can solder them diagonally. My initial idea of having 8 nodes connected like this, fell into water as I didn't have enough space anymore. Only 5 nodes could be connected. I ordered R3,08 connectors instead of R5 that I had in my mind. These numbers mean the distance between the pins.
Pin out used on the board
I knew I had to solder the bus lines even before I ordered the perfboard, and I did watch a couple of tutorials on youtube on how to do it. But seeing is not the same as doing :D You be the judge of the quality of the traces. I tried to connect the bus with solder but quickly found out that my 5€ soldering iron is not up to the task (yeah, I'm blaming the iron ofcourse :D). I went with hard wires instead.
No alt text provided for this image
The whole bus could have been made much easier if I had just bought a stripboard! Stripboard columns are all connected horizontally with a copper trace and rows are separated. Before this, I have never even heard about these kind of boards!
Anyway, I spent couple of hours in the afternoon and had fun with it. Its been a while since I soldered something. As a software engineer I rarely get to do this low level and this was a great opportunity to learn something new.
Example of stripboard. Source: partco.fi
Did it work?
When I finally soldered everything, it looked alright and after testing for continuity and resistance between pins, I decided to plug it into the 24V power supply. I expected the whole thing to go up in smoke but after loading it with 1.5A, everything was fine. My home CAN devices pull at max 1.2A at 24V so I am fairly confident this bus card is going to deliver that power just fine.
Next came the CAN signal testing and that also worked at 125, 250 and 500kbits.
No alt text provided for this image
Next steps
This is just a prototype board where I am testing if the concept will even work. My plan is to order a professional PCB from one of the popular manufacturers. The perfboards traces are suboptimal, unprotected from oxidation and probably pose a fire risk which means I need to be around when it is powered. I have started designing a PCB that would serve this purpose much better. Also the selection of connectors is crucial as the screw in terminal blocks are too think for the cables I want to use, so the next connectors are probably going to be plug type with R5 spacing making the PCB a bit wider but easier to work with.
No alt text provided for this image
The dedicated power port makes it easy to connect Vcc and GND to the board and even daisy chain these kind of cards easily if you would want to make a separate CAN bus. With the beefy tracks for the power it is possible to power more than 2A as the calculation for 1oz/ft2 with a track of 5mm is estimated to be 3.8A. Increasing the copper thickness can make it carry more current which can be modified in manufacturing.
No alt text provided for this image
Published by

To braid or not to braid?

I started to finish up this setup I have at home and decided also to braid all wires. You know what they say, if you can’t hide it, show it!

My pcbs have finally arrived! I keep thinking about the time we all live in. Nowadays even mere mortals can order professionally made pcbs at very low cost!

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
