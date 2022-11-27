---
layout: post
title:  "PLC Programming: Debug Codesys with custom exceptions"
author: Toni Kucic
date:   2022-11-27 22:22:19 +0300
categories: plc-programming
tags : [plc,plcprogramming,structuredtext,codesys, iec61131-3, custom-exceptions]
thumbnail: /assets/post_images/breakpoint-exception.png
comments_id: 21
---
Does your PLC sometimes crash and you cannot find the cause? Here is one way to help the debug process.

While the CODESYS v3 documentation on this topic is quite limited, it does show how to make custom exceptions. The information is located under the [CheckBounds function for implicit checks](https://help.codesys.com/api-content/2/codesys/3.5.12.0/en/_cds_obj_pou_checkbounds/#dfdcba7632c6206c0a8640e001cd745-id-60245801dcc13846c0a8640e017aa367).

#### Uses in POUs for implicit checks

When you add a POU for implicit checks, specifically CheckBounds, you will get this code as an example. You can copy the example to other POUs like CheckRangeSigned which can throw an exception if, during runtime, a variable exceeds its range.

```pascal
VAR
    _pApp     : POINTER TO CmpApp.APPLICATION;
    _result   : SysTypes.RTS_IEC_RESULT;
END_VAR

IF _pApp <> 0 THEN
    AppGenerateException(pApp:=_pApp, ulException:=RtsExceptions.RTSEXCPT_ARRAYBOUNDS);
END_IF
```

For this to work you will need additional libraries, specifically CmpApp.library, SysExcept.library and SysTypes2_Interfaces.

#### Custom examples

Even though the example is embedded into these CheckPOU functions, it is possible to use it anywhere in the application code. For example, here is a function adds two numbers, and if one of them are 0, throws an exception.

```pascal
FUNCTION addTwoNumbers : INT
VAR_INPUT
    a : INT;
    b : INT;
END_VAR
VAR
    _pApp : POINTER TO CmpApp.APPLICATION;
    _result   : SysTypes.RTS_IEC_RESULT;
END_VAR
//Add two numbers but if one is zero, throw an exception
IF a <> 0 AND b <> 0 THEN
    addTwoNumbers := a + b;
    RETURN;
END_IF

//If we reach here, throw an exception
_pApp := AppGetCurrent(pResult:=ADR(_result));
IF _pApp <> 0 THEN
   AppGenerateException(pApp:=_pApp, ulException:=RtsExceptions.RTSEXCPT_ILLEGAL_INSTRUCTION);
END_IF
```

Now when we call addTwoNumbers, if one of the numbers are 0, we will stop the PLC on exception.

```pascal
addTwoNumbers(1,2);
addTwoNumbers(3,4);
addTwoNumbers(-1,9);
addTwoNumbers(0,11); //->PLC Stops on exception
```

You can even make your own, Except function that implements the code so exception call could be shortened.

```pascal
FUNCTION callException : BOOL
VAR_INPUT
    ulException : UDINT := RtsExceptions.RTSEXCPT_ILLEGAL_INSTRUCTION;
END_VAR
VAR
    _pApp : POINTER TO CmpApp.APPLICATION;
    _result   : SysTypes.RTS_IEC_RESULT;
END_VAR
_pApp := AppGetCurrent(pResult:=ADR(_result));
IF _pApp <> 0 THEN
    AppGenerateException(pApp:=_pApp, ulException:=ulException);
END_IF
```

Then the call could be:

```pascal
//Some code that does something
.
.
.
.
//more code
//function that returns from the program if condition

//if we reach here something is broken
callException(RtsExceptions.RTSEXCPT_OUT_OF_MEMORY);
```

See the list of exceptions available [here](https://content.helpme-codesys.com/en/libs/SysExcept/Current/RtsExceptions.html).

#### A way without using the additional libraries

Some PLC vendors do not have these libraries, therefore it's not possible to reuse this method. But, there is a way, rather hacky, but it works. The idea is to find a exception that the PLC always crashes, e.g. divide by zero. Create a function that does exactly that and there you go.

```pascal
FUNCTION callException : INT
VAR
    vInt1 : INT := 1;
    vInt2 : INT := 1;
END_VAR

callException2 := 1 / (vInt1 - vInt2);
```

I say hacky AF. Codesys is quite good in detecting division by zero with literals and constants. Only way to do make it divide by zero is to fool the compiler and make a calculation result in zero.

#### Debugging this information

When the PLC stops on exception, it will show you the line where the exception has occured. For example, if you divide by zero, the line at which this has occured will have a breakpoint. In the case that this has happened in the root of a POU, that is easy to find but what if this happens inside of a function that is called many times?

![Results](/assets/post_images/breakpoint-exception.png){:class="img-responsive"}

You might think this exception thing is useless in these cases but, the Call Stack is your friend. To access Call Stack in codesys go to Main Menu -> View -> Call Stack.

The call stack shows the POU where the function was called.

![Results](/assets/post_images/codesys-call-stack.png){:class="img-responsive"}

#### Things to watch out for

The implicitly called functions like CheckBounds, CheckDiv etc increase the CPU load significantly and are not designed to run on a production system. Never run these on a production system unless you have no choice.

CmpApp, SysExcept, SysTypes2_Interfaces are libraries and will increase the binary code size. Be sure to remove those before deploying to production.

This is a tool like any other and needs to be used accordingly. There is no need to run this continuously, for example on major releases or during testing this could be implemented to confirm there are no exceptions or funny buisness going on after a code change.

An easy way to disable this is by not even building the functions. To exclude a POU from build, click on the POU -> Properties -> Build Tab -> Exclude from build. This makes the compiler oblivious to the function. Please note, if you have used the POU in the application you will get a compiler error.

### Related posts in this category

{% capture category %}{{ page.categories | first }}{% endcapture %}
{% for post in site.categories[category] limit: 5 %}
[{{ post.title | escape }}]({{ post.url | relative_url }})
{% endfor %}
