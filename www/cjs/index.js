var sampleApp = angular.module('sampleApp', ['ui.bootstrap']);

sampleApp.controller('sampleController', function ($scope, $http, $window) {
	
	//-----------get List Of Categories --------------------------
		$scope.getcategorylist = function () {
			$http({
				method: 'GET',
				url: 'http://localhost:8080/api/getcategorylist/',
				dataType: 'jsonp'
			}).then(function (response) {
				$scope.categorylistdata = response.data;
			});
		};
		
	//-----------get List Of Associated products Of Category --------
		$scope.getmyproducts = function (categoryid) {
			$http({
				method: 'GET',
				url: 'http://localhost:8080/api/getmyproducts/'+categoryid,
				dataType: 'jsonp'
			}).then(function (response) {
				$scope.productslistdata = response.data;
			});
		};
		
	//----------- Delete Category and Associated products ------------------
		$scope.DeleteCategory = function(categoryid) { 
		 	if (confirm("Are you sure to Delete?")==true){				  
				$http({
					method: 'DELETE',
					url: 'http://localhost:8080/api/DeleteCategory/'+categoryid,
					dataType: 'jsonp'
				}).success(function(data) {
					    $scope.status = data.status;
							if ($scope.status===0) {
							alert('Category Delete Succesfully..!');
							$window.location.reload();	
				            } else {
								 alert("Failed to Delete");								 	 
							}
				});				  
			}else{
				return false;
			};
		};
		
		
	  
  });