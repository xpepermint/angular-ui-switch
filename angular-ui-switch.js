angular.module('uiSwitch', [])

.directive('switch', function(){
  return {
    restrict: 'AE'
  , replace: true
  , transclude: true
  , template: function(element, attrs) {
      var html = '';
      var extraMethod = '';

      if (attrs.ngOnClick) {
          extraMethod += '; ' + attrs.ngOnClick;
      }
      if (attrs.ngChange) {
          extraMethod += '; ' + attrs.ngChange + '()';
      }

      html += '<span';
      html +=   ' class="switch' + (attrs.class ? ' ' + attrs.class : '') + '"';

      html += attrs.ngModel ? ' ng-click="' + attrs.disabled + ' ? ' + attrs.ngModel + ' : ' + attrs.ngModel + '=!' + attrs.ngModel + (attrs.ngChange ? '; ' + attrs.ngChange + '()"' : '"') : '';
      html +=   ' ng-class="{ checked:' + attrs.ngModel + ', disabled:' + attrs.disabled + ' }"';



      if (attrs.onValue && attrs.offValue) {
          html += attrs.ngModel ? ' ng-click="' + attrs.disabled + ' ? ' + attrs.ngModel + ' : ' + attrs.ngModel + '=(' + attrs.ngModel + '=== \'' + (attrs.onValue || true) + '\' ? \'' + (attrs.offValue || false) + '\':\'' + (attrs.onValue || true) + '\')' + extraMethod + '"' : '';
          html += ' ng-class="{ checked:' + attrs.ngModel + '===\'' + (attrs.onValue || true) + '\'?' + 'true' + ':' + 'false' + ', disabled:' + attrs.disabled + ' }"';
      } else {
          html += attrs.ngModel ? ' ng-click="' + attrs.disabled + ' ? ' + attrs.ngModel + ' : ' + attrs.ngModel + '=!' + attrs.ngModel + extraMethod +'"' : '';
          html += ' ng-class="{ checked:' + attrs.ngModel + ', disabled:' + attrs.disabled + ' }"';
      }

      html +=   '>';
      html +=   '<small></small>';
      html +=   '<input type="checkbox"';
      html +=     attrs.id ? ' id="' + attrs.id + '"' : '';
      html +=     attrs.name ? ' name="' + attrs.name + '"' : '';
      html +=     attrs.ngModel ? ' ng-model="' + attrs.ngModel + '"' : '';
      html +=     ' style="display:none" />';
      html +=     '<span class="switch-text">'; /*adding new container for switch text*/
      html +=     attrs.on ? '<span class="on">'+attrs.on+'</span>' : ''; /*switch text on value set by user in directive html markup*/
      html +=     attrs.off ? '<span class="off">'+attrs.off + '</span>' : ' ';  /*switch text off value set by user in directive html markup*/
      html += '</span>';
      return html;
    }
  }
});
