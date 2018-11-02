
 var myApp = angular.module('cgDemoApp',[]);
 
 var myController = myApp.controller('ctrl1',function($scope){
	$scope.appTitle='My AJS Application';
	$scope.contacts = ['9052224753','9550204753'];
 });
  
 var myController2 = myApp.controller('ctrl2',function($scope){
	
	$scope.sayHello =function(){
		alert("Hello Everybody!");
	};
	
	$scope.sayGoodBye=function(){
		alert("GoodBye Everyone!");
	};
	
	$scope.status="";
	
	$scope.changeStatus=function(newStatus){
		$scope.status=newStatus;
	};
 });
 
 var myController3 = myApp.controller('shopping',function($scope){
	$scope.items = [
		{id:101,name:'Rice',qty:0,rate:345,amt:0},
		{id:102,name:'Horlicks',qty:0,rate:145,amt:0},
		{id:103,name:'BRU',qty:0,rate:45,amt:0},
		{id:104,name:'Popcorn',qty:0,rate:645,amt:0},
		{id:105,name:'Tea',qty:0,rate:45,amt:0}
	];
	
	$scope.totalCost = 0;
	$scope.newItem ={id:0,name:'',qty:0,rate:0,amt:0};
	
	$scope.computeTotal = function(){
		$scope.totalCost=0;
		for(i=0;i<$scope.items.length;i++)
			$scope.totalCost += $scope.items[i].amt;
	}
	
	$scope.computeAmount = function(item){
		item.amt = item.rate*item.qty;
		$scope.computeTotal();
	}
	
	$scope.addItem = function(){
		$scope.items.push($scope.newItem);
		$scope.computeTotal();
		$scope.newItem ={id:0,name:'',qty:0,rate:0,amt:0};
	};
	
	$scope.removeItem = function(index){
		$scope.items.splice(index,1);
		$scope.computeTotal();
	};
 });
 
 myApp.directive("greeting",function(){
	return {
		replace:true,
		template:'<h3>Hello! Everbody</h3>',
		restrict:'AE'
	}; 
 });
 
 myApp.directive("today",function(){
	return {
		replace:true,
		template:'<h3>'+(new Date())+'</h3>',
		restrict:'AE'
	}; 
 });
  
 myApp.filter("reverseText", function() {
	
	return function(input) {
		 
        var result = "";
        input = input || "";

       for (var i=0; i<input.length; i++) {
              result = input.charAt(i) + result;
       }

       return result;
   };
});

var myController4 = myApp.controller('ctrl4',function($scope,$rootScope){
	$rootScope.message1="Hello from root scope controller 4";
	$scope.message2="Hello from scope controller 4";
});

var myController5 = myApp.controller('ctrl5',function($scope,$rootScope){
	$rootScope.message3="Hello from root scope controller 5";
	$scope.message4="Hello from scope controller 5";
});

