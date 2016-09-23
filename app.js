(function (){
'use strict';

var app = angular.module('ShoppingListCheckOff', []);

var ToBuyShoppingController = function($scope, ShoppingListCheckOffService) {
  $scope.toBuyList = ShoppingListCheckOffService.toBuyList;
  $scope.buyItem = function (item) {
    var itemIndex = $scope.toBuyList.indexOf(item,0 );
    if (itemIndex !== -1) {
      $scope.toBuyList.splice(itemIndex,1);
      ShoppingListCheckOffService.boughtList.push(item);
    }
  };
}; //ToBuyController function

var AlreadyBoughtShoppingController = function($scope, ShoppingListCheckOffService) {
  $scope.boughtList = ShoppingListCheckOffService.boughtList;
  $scope.isEmptytoBuyList = function () {
			return ShoppingListCheckOffService.toBuyList.length ? false : true;
	};

}; //AlreadyBoughtController function

var ShoppingListCheckOffService = function () {

// Initial list of items to buy
  var toBuy = [{name:'cookies', quantity:'10 bags'},
                    {name:'chocholate', quantity:'3 packs'},
                    {name:'milk', quantity:'6 bottles'},
                    {name:'Coca Cola', quantity:'4 bottles'},
                    {name:'flour', quantity:'2 kg'},
                    {name:'oil', quantity:'1 liters'},
                    {name:'vinegar', quantity:'0,5 liter'},
                    {name:'tomatoes', quantity:'1 kg'},
                    {name:'potatoes', quantity:'2 kg'},
                    {name:'mineral water', quantity:'5 liters'},
                    {name:'red wine', quantity:'2 bottles'},
                    {name:'beer', quantity:'6 cans'}];
// Initial list of bought items
  var bought = [];

  return{
    toBuyList: toBuy,
    boughtList: bought,
    moveToBought: function (item) {
      return;
    }
  };
}; //ShoppingListCheckOffService function
ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
app.controller('ToBuyShoppingController', ToBuyShoppingController);
app.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


}());
