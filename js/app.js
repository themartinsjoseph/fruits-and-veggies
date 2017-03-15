/* setup your angular app here */
var app = angular.module('FruitsandVeggies', []);
app.controller('ListCtrl', ['$scope', function($scope){

	$scope.poolList = ['Artichoke', 'Apricot', 'Apple', 'Asparagus', 'Banana', 'Arugula'];
	$scope.fruitsList = [];
	$scope.vegList = [];

	$scope.addFruitItem = function(){
			$scope.fruitsList.push($scope.poolList.splice(this.$index, 1)[0]);
			$scope.item = '';
	};

	$scope.addVegItem = function(){
		$scope.vegList.push($scope.poolList.splice(this.$index, 1)[0]);
		$scope.item = '';
	};

	$scope.addFruitToPool = function() {
		$scope.poolList.push($scope.fruitsList.splice(this.$index, 1)[0]);
		$scope.item = '';
	};

	$scope.addVegToPool = function() {
		$scope.poolList.push($scope.vegList.splice(this.$index, 1)[0]);
		$scope.item = '';
	};

	//How to know if the item is a fruit or vegetable 
	//The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
	$scope.inFruits = function() {
	if (fruits.includes(this.$index, 1)[0]) {
		return true; 
	} else {
		return false; 
	}
	};

	$scope.inVegetables = function() {
		if (vegetables.includes(this.$index, 1)[0]) {
			return true; 
		} else {
			return false 
		}
	};

}]);
