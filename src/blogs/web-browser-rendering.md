---
title: 'Web Browser Rendering'
description: 'A look into how a web browsers render resources such as HTML/CSS into pixels on the screen.'
---

## High-Level Components Of Web Browsers

Browsers contain many things to do their jobs and may have more features than some 
depending on the implementations done by a browser vendor.

In most cases however browsers typically contain:

1. **User Interface**: This includes the address bar, back/forward buttons, 
   menus, etc.; any part that the user interacts with but not including 
   the viewport page where the web resource is displayed.
2. **Browser Engine**: Marshals actions between the UI and the *rendering engine*.
3. **Rendering Engine**: Generates the necessary data structure and positioning 
   of elements to be rendered to the viewport from a given resource (ie. HTML/CSS).
4. **Networking**: Manages network requests from application protocols such as 
   HTTP, FTP, etc.
5. **UI Backend**: Used for drawing basic widgets such as combo boxes and windows 
   and are not platform specific. It also uses OS methods/system calls.
6. **JavaScript Interpreter**: Parses and executes JavaScript resources.
7. **Data Storage**: The storage persistance layer.

![Figure 1: Browser Components](/images/browser-components.avif)

> Image is from [web.dev: How browsers work](https://web.dev/howbrowserswork/#the-browsers-high-level-structure)

## The Rendering Engine

When a browser receives an HTML/CSS resource it usually does the ff.:

1. **Parsing**: Parses the resource and constructs the *object model trees* such as 
   the *Document Object Model (DOM)* tree from the HTML resource and 
   the *CSS Object Model (CSSOM)* tree from the CSS resource.
2. **Render Tree**: Once the object model trees are generated they now get *combined* 
   as the render tree which removes elements that aren't going to 
   be rendered in the viewport such as anything in the meta tags or 
   elements that contain a `display: none` css property.
3. **Layout**: After the construction of the render tree, the calculation of each 
   element's *geometry*, *position*, *size*, or *layout* within the 
   viewport is made. (This is also called *reflow*).
4. **Paint**: Finally, once the render tree is made and the layout for each elements 
   are calculated, the browser then begins to *paint* the pixels on the screen based 
   on the elements in the render tree with respect to each element's layout.
   
![Figure 2: The Render Engine Process](/images/browser-rendering-process.png)

## The Object Model Trees

When a browser receives an HTML or CSS resource it will parse them and generate 
a tree data structure called the *Object Model Tree*.

### Document Object Model (DOM) Tree

For example, an HTML with the ff. contents:

```html
<html>
  <head>
    <title>My Title</title>
    <meta name="Foo bar">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello world</h1>
    <p>
      This is 
      <span style="display: none;">really</span>
      <span style="font-weight: bold;">cool!</span>
    </p>
  </body>
</html>
```

May get generated as the ff. DOM tree:

![Figure 3: DOM Tree Example](/images/dom-tree-example.png)

### CSS Object Model (CSSOM) Tree

TBD: Give an example of the CSSOM Tree

## Render Tree

TBD: Give a brief description of what occurs during the render tree construction phase

## Layout

TBD: Give a summary of what occurs during the layout phase. Discuss the CSS box model.

## Paint

TBD: Give an example of what the final output is on the viewport for the previous 
HTML/CSS code samples.

## Analyzing The Rendering Process

TBD: Give a description on how to analyze the rendering process using the browser dev tools 
(specifically using Google Chrome).

## References

- [web.dev: How Browsers Work](https://web.dev/howbrowserswork/#style-sheet-cascade-order)
- [Ilya Grigorik: Constructing The Object Model](https://web.dev/critical-rendering-path-constructing-the-object-model/)
