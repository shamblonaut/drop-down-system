# Drop Down System
A system to reveal/hide components of a drop-down menu

## Install
```sh
npm i --save drop-down-system
```

## Usage
```js
import { setupDropDownSystem } from "drop-down-system";

setupDropDownSystem(activators, dropDownClass, visibilityClass);
```

- ***`activators`***: Array of elements that must be clicked for drop-down to be activated
- ***`dropDownClass`***: Class name assigned to the drop-down container
- ***`visibilityClass`***: Class name to be toggled on the drop-down (used for styling)

## Examples
#### `index.html`
```html
<html>
<head>
  <script src="main.js" defer></script>
  <style>
    .menu-bar {
      display: flex;
      position: relative;
    }
    .drop-down {
      position: absolute;
      opacity: 0;
      transform: scale(0);
      transform-origin: top left;
      transition: all ease-in-out 250ms;
      display: flex;
      flex-direction: column;
    }
    .drop-down.visible {
      opacity: 1;
      transform: scale(1);
    }
  </style>
</head>
<body>
  <div class="menu-bar">
    <div class="file">
      <button class="menu-title">File</button>
      <div class="drop-down">
        <div class="drop-down-item">New</div>
        <div class="drop-down-item">Open</div>
        <div class="drop-down-item">Save</div>
      </div>
    </div>
    <div class="edit">
      <button class="menu-title">Edit</button>
      <div class="drop-down">
        <div class="drop-down-item">Cut</div>
        <div class="drop-down-item">Copy</div>
        <div class="drop-down-item">Paste</div>
        <div class="drop-down-item">Font</div>
      </div>
    </div>
  </div>
</body>
</html>
```

#### `index.js`
```js
import { setupDropDownSystem } from "drop-down-system";

const menuBar = document.querySelector(".menu-bar");
setupDropDownSystem(Array.from(menuBar.children), "drop-down", "visible");
```

> **Note:** The above code is was written and run in a webpack environment (no configuration). The `index.js` was bundled into `main.js` inside the `dist` folder, where the `index.html` was also placed.

> **Pro tip**: You could provide the `activators` argument with an array of specific elements to pick the elements you want to have drop-downs on.