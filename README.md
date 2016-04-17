# [angular](https://angularjs.org/)-ui-switch

This is a simple iOS 7 style switch directive for AngularJS. You can use this module as you would use the default HTML checkbox input element. This is a super lightweight module and you can completely change the design using just CSS.

Supported by all modern browsers: Chrome, Firefox, Opera, Safari, IE8+

![YoomJS](https://raw.githubusercontent.com/xpepermint/angular-ui-switch/master/logo.png)

Inspired by [switchery](https://github.com/abpetkov/switchery) - in angular way.

## Installation

Download the package from `github`. The package is also available over `npm install angular-ui-switch` or `bower install angular-ui-switch`.

Include `javascript` and `css` files into your page.

```html
<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
  ...
  <link rel="stylesheet" href="/ui-switch.min.css"/>
</head>
<body>
  ...
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.3/angular.min.js"></script>
  <script src="/ui-switch.min.js"></script>
</body>
</html>
```

Declare a dependency on the module.

```js
angular.module('myModule', ['uiSwitch']);
```

Insert the switch in your html template.

```html
<form>
  <switch id="enabled" name="enabled" ng-model="enabled" class="green"></switch>
  <br>{{ enabled }}
</form>
```

Add optional on/off text
```html
<form>
  <switch id="enabled" name="enabled" ng-model="enabled" on="On" off="Off" class="green"></switch>
  <br>{{ enabled }}
</form>
```

Disabled state
```html
<form>
  <switch id="enabled" name="enabled" ng-model="enabled" disabled="true" class="green"></switch>
  <br>{{ enabled }}
</form>
```

## Design

You can completely change the design. All the magic is hidden inside two CSS classes.

```css
.switch {
  /* frame */
}
.switch small {
  /* button */
}
.switch.checked {
  /* frame when enabled */
}
.switch.checked small {
  /* button when enabled */
}
```

## Sizes

You can change the sizes of the switch element via size. Giving it a value of small or large will result in adding switchery-small or switchery-large classes respectively, which will change the switch size.

Not using this property will render the default sized switch element.

```html
<form>
  <switch id="enabled" name="enabled" ng-model="enabled" size="small" class="green"></switch>
  <br>{{ enabled }}
</form>
```

```html
<form>
  <switch id="enabled" name="enabled" ng-model="enabled" size="small" class="green"></switch>
  <br>{{ enabled }}
</form>
```

Alternatively you could just use a class attribute of `class="sm"` or `class="lg"`, which will change the switch size.

Again, not using size element or class attributes property will render the default sized switch element.

```html
<form>
  <switch class="sm" id="enabled" name="enabled" ng-model="enabled"></switch>
  <br>{{ enabled }}
</form>
```

```html
<form>
  <switch class="lg" id="enabled" name="enabled" ng-model="enabled"></switch>
  <br>{{ enabled }}
</form>
```

![YoomJS](https://raw.githubusercontent.com/EskoCruz/angular-ui-switch/master/switch-size.png)

## Publishing

1. Update version in `package.json` and `bower.json`.

2. Run `make compile` to minify files.

3. Run `make publish` to publish.
