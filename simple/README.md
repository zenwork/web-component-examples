# Plain JavaScript Examples
This project provides varied implementations of the same component in different 'flavors' using simple JavaScript and in some cases a simple library that provides simple syntactic sugar for implementing the same component.

## The Spec

The component implementations all implement the game rock-paper-scissors. 

type|name|default|description
----|----|-------|-----------
element|`rps-tag`|&nbsp;|&nbsp; 
attribute|`player-1`|optional|name  


### Mark-up
```
<rps-tag-1="Johnny English" ></rock-paper-scissors>
``` 

## Implementations

all implementations use the polymer `webcomponent.js` polifill.

The simplest way to run these examples is to install `http-server` with npm. then run `http-serve simple`. 

### Simple

This implementation uses nothing other than vanilla js.

### X-Tag 1.5

This implementation uses X-Tag 1.5 (2.0 is in beta and not full featured and seemingly stalled)

### WC Tester
Web component implementation that provides a visual logging facility. It provides an event-based interface to log information. It is there as an example of inter-component communication but also as a nice way to see debug info on the screen.

It also includes a a function called `addIntruder`. It can be used to attmept to inject css into a shadow dom'ed compoent.

##### sources:
1. Web Component Specifications. https://developer.mozilla.org/en-US/docs/Web/Web_Components
1. Mozila Developer Network reference examples. https://github.com/mdn/web-components-examples
1. X-Tag: light weight library that provides syntactic sugar around Web Component standard. 
    1. https://x-tag.github.io/
    1. https://developer.mozilla.org/en-US/docs/Archive/Apps/Tools_and_frameworks/x-tags
1. SlimJS: light weight library that provides syntactic sugar around Web Component standard. http://slimjs.com
