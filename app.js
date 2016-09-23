(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService','$scope'];

function ToBuyController(ShoppingListCheckOffService, $scope) {
  $scope.toBuyList = ShoppingListCheckOffService.toBuyList;
  $scope.BuyItem = function (item) {
    var itemIndex = $scope.itemsToBuy.indexOf(item,0 );
    if (itemIndex !== -1) {
      $scope.toBuyList.splice(itemIndex,1);
      ShoppingListCheckOffService.boughtList.push(item);
    }
  };
} //ToBuyController function

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService','$scope'];
function AlreadyBoughtController(ShoppingListCheckOffService, $scope) {
  $scope.boughtList = ShoppingListCheckOffService.boughtList;
  $scope.isEmptyBuyList = function () {
			return ShoppingListCheckOffService.toBuyList.length ? false : true;
	};

} //AlreadyBoughtController function

function ShoppingListCheckOffService(){

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
    moveToBought: function (item){
      return;
    }
  };

} //ShoppingListCheckOffService function

}

)();
