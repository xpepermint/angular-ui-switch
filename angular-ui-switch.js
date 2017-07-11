angular.module('uiSwitch', [])

.directive('switch', function(){
  return {
    restrict: 'AE'
  , replace: true
  , transclude: true
  , template: function(element, attrs) {
      var ngClickExpr = (attrs.ngDisabled ? attrs.ngDisabled : (attrs.disabled ? true : false)) + '? true : (' + attrs.ngModel + '=!' + attrs.ngModel + (attrs.ngChange ? '; ' + attrs.ngChange + '()' : '') + ')';

      var html = '';
      html += '<span';
      html +=   ' class="switch' + (attrs.class ? ' ' + attrs.class : '') + '"';
      html +=   attrs.ngModel ? ' ng-click="' + ngClickExpr + '"' : '';
      html +=   ' ng-class="{ checked:' + attrs.ngModel + ', disabled:' + (attrs.ngDisabled || attrs.disabled) + ' }"';
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
