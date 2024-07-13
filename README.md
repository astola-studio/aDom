# aDom Library

aDom is a lightweight JavaScript library for DOM manipulation, inspired by jQuery. It provides a simple API for selecting elements, manipulating classes, setting styles, handling events, and more.

## Getting Started

### Installation

You can include aDom in your project by downloading the `aDom` script or by using the provided CDN link.

#### Via CDN

```html
<script src="https://raw.githubusercontent.com/astola-studio/aDom/main/aDom.js"></script>
```

#### Hosting Locally

Download the `aDom.js` file and include it in your project:

```html
<script src="path/to/aDom.js"></script>
```

### Usage

aDom provides a simple and intuitive API for DOM manipulation. The library is accessible using the `π` symbol.

#### Selecting Elements

```javascript
// Select elements with class 'my-class'
π('.my-class');
```

#### Adding and Removing Classes

```javascript
// Add a class
π('.my-class').addClass('new-class');

// Remove a class
π('.my-class').removeClass('old-class');

// Toggle a class
π('.my-class').toggleClass('toggle-class');
```

#### Setting and Getting CSS Properties

```javascript
// Set a CSS property
π('.my-class').css('color', 'red');

// Get a CSS property
var color = π('.my-class').css('color');
console.log(color);
```

#### Setting and Getting HTML Content

```javascript
// Set HTML content
π('.my-class').html('<p>New content</p>');

// Get HTML content
var html = π('.my-class').html();
console.log(html);
```

#### Event Handling

```javascript
// Add an event listener
π('.clickable').on('click', function() {
    alert('Element clicked!');
});

// Remove an event listener
π('.clickable').off('click', function() {
    alert('Element clicked!');
});
```

## Contributing

We welcome contributions to improve aDom. Feel free to submit issues and pull requests on [GitHub](https://github.com/astola-studio/aDom).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
