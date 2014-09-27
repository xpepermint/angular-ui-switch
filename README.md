# [angular](https://angularjs.org/)-ui-switch

This is a simple iOS 7 style switch directive for AngularJS. You can use this module as you would use the default HTML checkbox input element. The is a super lightweight module and you can completely change the design using just CSS.

Supported by all modern browsers: Chrome, Firefox, Opera, Safari, IE8+

![YoomJS](https://raw.githubusercontent.com/xpepermint/angular-ui-switch/master/logo.png)

Inspired by [switchery](https://github.com/abpetkov/switchery) - in angular way.

## Installation

Download the package from `github`. The package is also available over `npm install angular-ui-switch` or `bower install angular-ui-switch`.

Include `javascript` and `css` file into your page.

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
  <switch name="enabled" ng-model="enabled"></switch>
  <br>{{ enabled }}
</form>
```

## Notes

Minify JS: `uglifyjs ui-switch.js --compress --mangle --comments`
Minify CSS: `minify angular-ui-switch.css`
