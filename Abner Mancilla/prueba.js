var	myApp= angular.module("myApp",[]);

myApp.controller("prueba",function($scope){

	$scope.formulario=function(){
	$scope.nombrecompleto=$scope.nombre+""+$scope.apellido;
}
})