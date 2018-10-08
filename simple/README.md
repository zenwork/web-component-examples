# Plain JavaScript Examples
This project provides varied implementations of the same component in different 'flavors' using simple JavaScript and in some cases a simple library that provides simple syntactic sugar for implementing the same component.

## The Spec

The component implementations all implement the game rock-paper-scissors. 

type|name|default|description
----|----|-------|-----------
element|`rock-papaer-scissors`|&nbsp;|&nbsp; 
attribute|`player1`|human|valid:human,computer  
attribute|`player2`|computer|valid:human,computer
slot|`winning-message`|You Win|message displayed when player 1 wins
slot|`losing-message`|You Lost|message displayed when player 1 loses

### Minimal Mark-up
```
<rock-paper-scissors></rock-paper-scissors>
``` 

### Full Mark-up
```
<rock-paper-scissors player1="human" player2="computer" best-of="5">
    <winning-message>You Won Biggly!</winning-message>
    <losing-message>You lost. SAD!</losing-message>
</rock-paper-scissors>
``` 

##### sources:
1. Web Component Specifications. https://developer.mozilla.org/en-US/docs/Web/Web_Components
1. Mozila Developer Network reference examples. https://github.com/mdn/web-components-examples
1. X-Tag: light weight library that provides syntactic sugar around Web Component standard. https://x-tag.github.io/
1. SlimJS: light weight library that provides syntactic sugar around Web Component standard. http://slimjs.com
