---
title: 'Web Browser Rendering'
description: 'A look into how web browsers render resources such as HTML/CSS into pixels on the screen.'
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

For a given CSS stylesheet resource like the ff.:

```css
body {
  font-size: 16px;
}

span {
  color: yellow;
}

p {
  font-weight: bold;
}

p > span {
  color: red;
}

h1 {
  font-size: 24px;
}
```

This should generate a CSSOM tree like so:

![Figure 4: CSSOM Tree Example](/images/cssom-tree-example.png)

For each child node in the tree it *inherits* [most] style properties from 
its parent if not declared.

For example, all child elements of the `body` node in this example will get 
a `font-size` of `16px`, specifically these are the `p` and `span` elements.

The `h1` element in this case however will receive a `font-size` of `24px` since 
it has a specific style rule indicating this.

#### Specificity

*Specificity* is the algorithm browsers use to determine which style rules to apply 
to competing style declarations.

The algorithm uses four (4) categories, each containing either $0$ or a positive 
integer, all each of which are set to $0$ by default.

Values in each category are *increased* based on the ff.:

1. Any selector that is defined in an element's `style` attribute will increase 
   the specificity value of its **first** category by $1$.
2. ID selectors will increase the specificity value of its **second** category by $1$.
3. Other selector attributes or pseudo-classes in the selector will increase 
   the specificity value of its **third** category by 1.
4. Element name selectors or pseudo-elements increases the specificity value of its 
   **fourth** category by 1.

For example:

```css
/** 0-0-0-1 */
p {}

/** 0-0-1-0 */
[name="foo"] {}

/** 0-0-1-0 */
.bar {}

/** 0-1-0-0 */
#thing {}

/** 0-1-1-0 */
#thing.foo {}

/** 0-1-1-1 */
p#thing.foo {}
```

The algorithm selects the declaration based on the category with the 
highest value from first to fourth category.

So for example:

```css
/** 0-0-3-0 */
p.foo.foo.foo {
  color: red;
}

/** 0-1-0-0 */
p#bar {
  color: blue;
}
```

```html
<p id="bar" class="foo">hello</p>
```

Here, the `p` element will get a `blue` color since `p#bar` has higher category precedence 
than `p.foo.foo.foo` even though the latter contains a specificity value of $3$ for its 
category.

> For more information on specificity please see: 
> - [MDN: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
> - [CSS Spec: Specificity](https://www.w3.org/TR/CSS2/cascade.html#specificity)

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
