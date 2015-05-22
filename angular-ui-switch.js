angular.module('uiSwitch', [])

.directive('switch', function($compile, $parse){
    return {
          require: 'ngModel'
        , restrict: 'AE'
        , replace: true
        , transclude: true
        , scope: {
            isDisabled: '@',
            ngModel: '=',
            ngChange: '@'
        }
        , controller: function($scope){
            $scope.updateSwitch = function(element){
                //set style
                $scope.setElementStyle(element);
            };
            
            $scope.setElementStyle = function(element){
                if($scope.ngModel){
                    element.addClass('checked');
                }else{
                    element.removeClass('checked');
                }
            };
        }
        , template: function(element, attrs) {
            var html = '';
                html += '<span';
                html +=   ' class="switch' + (attrs.class ? ' ' + attrs.class : '') + '"';
                html +=   '>';
                html +=   '<small></small>';
                html +=   '<input type="checkbox"';
                html +=     attrs.id ? ' id="' + attrs.id + '"' : '';
                html +=     attrs.name ? ' name="' + attrs.name + '"' : '';
                html +=     attrs.ngModel ? ' ng-model="' + attrs.ngModel + '"' : '';
                html +=     ' style="display:none" />';
                html +=     '<span class="switch-text">'; //adding new container for switch text
                html +=     attrs.on ? '<span class="on">'+attrs.on+'</span>' : ''; //switch text on value set by user in directive html markup
                html +=     attrs.off ? '<span class="off">'+attrs.off + '</span>' : ' ';  //switch text off value set by user in directive html markup
                html += '</span>';
                return html;
        }
        , link: function($scope, element, attrs, controller){
            //apply initial style
            $scope.setElementStyle(element);
            //add click event when not disabled
            if(!angular.isDefined(attrs.isDisabled) || attrs.isDisabled == 'false'){
                element.bind('click', function(event){
                    $scope.$apply(function(){
                        $scope.ngModel = !$scope.ngModel; //toggle
                    });
                    if($scope.ngChange){
                        $scope.$parent[$scope.ngChange]();
                    }
                });
                //add watch
                $scope.$watch(
                    function(){
                        return $scope.ngModel;
                    },
                    function(newValue, oldValue){
                        if(newValue != oldValue){
                            $scope.updateSwitch(element);
                        }
                    }
                );
            }
        }
    }
});
