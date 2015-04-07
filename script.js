  // Code goes here
  (function() {

      var app = angular.module("categoryViewer", []);

      var MainController = function($scope, $http) {

          var onError = function(reason) {
              alert("Could not fetch.");
          };

        // function for get all
          var onGetAllComplete = function(response) {
              $scope.categories = response.data;
          };
   
          $scope.getCategories = function() {
              $http.get("http://w11a.3rmao.me/api/Categories/")
                  .then(onGetAllComplete, onError);
          };
   // function to find
          $scope.search = function(categoryId) {

              $http.get("http://w11a.3rmao.me/api/Categories/" + categoryId)
                  .then(onFindComplete, onError);
          };
          var onFindComplete = function(response) {
              $scope.category = response.data;
          };

          // function to add
          $scope.addCat = function (addCategory) {
              addCategory.Picture = "QEA=";
              $http.post("http://w11a.3rmao.me/api/Categories/",addCategory)
                  .then(onAddComplete, onAddError);
          };
          var onAddComplete = function (response) {
              alert("Category Added");
          };
          var onAddError = function (reason) {
              alert("Adding category failed.");
          };
   
   // function to edit
          $scope.getEditCategory = function(editCategoryId) {
              $http.get("http://w11a.3rmao.me/api/Categories/" + editCategoryId)
                  .then(onGetEditComplete, onError);
          };
          var onGetEditComplete = function(response) {
              $scope.editCategory = response.data;
          };
          $scope.edit = function (editCategory) {
              $http.put("http://w11a.3rmao.me/api/Categories/" + editCategory.CategoryID, editCategory)
                  .then(onEditComplete, onEditError);
          }
          var onEditComplete = function (responce) {
              alert("edited");
          }
          var onEditError = function (reason) {
              alert("edit failed");
          }

          $scope.delete = function (deleteId) {
              $http.delete("http://w11a.3rmao.me/api/Categories/"+deleteId)
                  .then(onDeleteComplete, onDeleteError);
          }
          var onDeleteComplete = function (responce) {
              alert("deleted");
          }
          var onDeleteError = function (reason) {
              alert("delete failed");
          }

      };

      app.controller("MainController", ["$scope", "$http", MainController]);
  }());