angular
	.module("myApp",['angularUtils.directives.dirPagination'])
	.controller("DemoController",searchBank);

	function searchBank($http) {
		var vm=this;
		vm.items=[];
		vm.favouriteList=[];
		vm.retrievedObjects=[];
		vm.isVisible=false;
		vm.view=10;
        $http.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').then(function(response){
		vm.items=response.data;
	});
        vm.favouriteThis = function (item) {

            vm.favouriteList = JSON.parse(localStorage.getItem('favouriteList')) || [];
            vm.favouriteList.push(item);
            console.log('item added',item);
            console.log(vm.favouriteList); 
            localStorage.setItem('favouriteList', JSON.stringify(vm.favouriteList));
            

        }
        vm.viewFavorites = function(){
        if(vm.isVisible == false)
           vm.isVisible = true;

        else if(vm.isVisible == true)
            vm.isVisible = false;
         vm.retrievedObjects = JSON.parse(localStorage.getItem('favouriteList'));
         console.log('retrievedObject: ', vm.retrievedObjects);

      }

};
