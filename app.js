// var app = angular.module('diamondStore', []);
//
// (function () {
//
//     app.controller('diamondStoreController', function () {
//         this.product = gem;
//
//
//     });
//
//     var gem = [
//         {
//             name: 'Srinu Akkineni',
//             price: 4.5,
//             des: 'Some gems have hidden qualities beyond their luster, beyond their shine. This is one of those gems',
//             canPurchase: true,
//             soldOut: false,
//             image: [
//                 {
//                     path: 'Images/img.jpg'
//                 }
//             ],
//             reviews: [
//                 {
//                     Stars: 5,
//                     body: "He has done awesome work",
//                     author: 'Srinu Akkineni'
//                 },
//                 {
//                     Stars: 3,
//                     body: "He has done awesome work",
//                     author: 'Kiran Raj'
//                 },
//                 {
//                     Stars: 2,
//                     body: "He has done awesome work",
//                     author: 'Nalla Babu'
//                 }
//             ]
//         },
//         {
//             name: 'Ashok Reddy',
//             price: 7.25,
//             des: 'Some gems have hidden qualities beyond their luster, beyond their shine. This is one of those gems',
//             canPurchase: true,
//             soldOut: false,
//             image: [
//                 {
//                     path: 'Images/photo.jpg'
//                 }
//             ],
//             reviews: [
//                 {
//                     Stars: 5,
//                     body: "He has done awesome work",
//                     author: 'Srinu Akkineni'
//                 },
//                 {
//                     Stars: 3,
//                     body: "He has done awesome work",
//                     author: 'Kiran Raj'
//                 },
//                 {
//                     Stars: 2,
//                     body: "He has done awesome work",
//                     author: 'Nalla Babu'
//                 }
//             ]
//         },
//         {
//             name: 'Nalla Babu',
//             price: 6.85,
//             des: 'Some gems have hidden qualities beyond their luster, beyond their shine. This is one of those gems',
//             canPurchase: true,
//             soldOut: false,
//             image: [
//                 {
//                     path: 'Images/img.jpg'
//                 }
//             ],
//             reviews: [
//                 {
//                     Stars: 5,
//                     body: "He has done awesome work",
//                     author: 'Srinu Akkineni'
//                 },
//                 {
//                     Stars: 3,
//                     body: "He has done awesome work",
//                     author: 'Kiran Raj'
//                 },
//                 {
//                     Stars: 2,
//                     body: "He has done awesome work",
//                     author: 'Nalla Babu'
//                 }
//             ]
//         }
//     ]
//
//     app.controller('panelController', function ($rootScope) {
//
//         var vm = this;
//         // vm.tab = 1;
//
//         vm.selectTab = function (setTab) {
//             vm.tab = setTab;
//         };
//
//         vm.isSelected = function (setTab) {
//             return vm.tab === setTab;
//         };
//
//
//
//         this.addReview = function () {
//             console.log("onClick");
//             $rootScope.showReview = true;
//         };
//
//     });
//
//     app.controller('reviewController', function ($rootScope) {
//         this.review = {};
//         this.showMode = false;
//         $rootScope.showReview =false;
//
//         console.log($rootScope);
//         this.addSubmit = function (product) {
//             product.reviews.push(this.review);
//             this.showMode = true;
//             this.review = {};
//             this.showMode = false;
//         };
//     });
//
//     app.directive('productTile', function () {
//         return {
//             restrict: 'A',
//             templateUrl: 'Include/product-title.html'
//         }
//     });
//
//     app.directive('productPanel', function () {
//         return {
//             restrict: 'E',
//             templateUrl: 'Include/product-panel.html',
//             controller: function () {
//
//                 var vm = this;
//                 // vm.tab = 1;
//
//                 vm.selectTab = function (setTab) {
//                     vm.tab = setTab;
//                 };
//
//                 vm.isSelected = function (setTab) {
//                     return vm.tab === setTab;
//                 };
//                 controllerAs: 'panels'
//             }
//         }
//     });
// })();