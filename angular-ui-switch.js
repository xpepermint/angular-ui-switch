angular.module('uiSwitch', [])

.directive('switch', function(){
  return {
    restrict: 'AE'
  , replace: true
  , transclude: true
  , template: function(element, attrs) {
      var html = '';
      attrs.class +=  '';
      attrs.ngModel += '';
      attrs.name += '';
      attrs.id += '';
      attrs.disabled += '';
      attrs.on += '';
      attrs.off += '';
      
      html += '<span';
      html +=   ' class="switch ' + attrs.class + '"';
      html +=   attrs.ngModel ? ' ng-click="' + attrs.disabled + ' ? ' + attrs.ngModel + ' : ' + attrs.ngModel + '=!' + attrs.ngModel + (attrs.ngChange ? '; ' + attrs.ngChange + '()"' : '"') : '';
      html +=   ' ng-class="{ checked:' + attrs.ngModel + ', disabled:' + attrs.disabled + ' }"';
      html +=   '>';
      html +=   '<small></small>';
      html +=   '<input type="checkbox"';
      html +=     ' id="' + attrs.id + '"';
      html +=     ' name="' + attrs.name + '"';
      html +=     ' ng-model="' + attrs.ngModel + '"';
      html +=     ' style="display:none" />';
      html +=     '<span class="switch-text">'; /*adding new container for switch text*/
      html +=     '<span class="on">'+attrs.on+'</span>'; /*switch text on value set by user in directive html markup*/
      html +=     '<span class="off">'+attrs.off + '</span>';  /*switch text off value set by user in directive html markup*/
      html += '</span>';
      return html;
    }
  }
});
