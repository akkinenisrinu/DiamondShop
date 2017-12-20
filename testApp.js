(function () {

    var app = angular.module('diamondStore', []);

    app.controller('diamondStoreController', function () {
        var Store = this;
        Store.showReview = false;
         Store.setTab = 1;

        Store.products = [
            {
                name: 'Srinu Akkineni',
                selectedProfile: 1,
                price: 4.5,
                des: 'Some gems have hidden qualities beyond their luster, beyond their shine. This is one of those gems',
                canPurchase: true,
                soldOut: false,
                image: [
                    {
                        path: 'Images/img.jpg'
                    }
                ],
                reviews: [
                    {
                        stars: 5,
                        body: "He has done awesome work",
                        author: 'Srinu Akkineni'
                    },
                    {
                        stars: 3,
                        body: "He has done awesome work",
                        author: 'Kiran Raj'
                    },
                    {
                        stars: 2,
                        body: "He has done awesome work",
                        author: 'Nalla Babu'
                    }
                ]
            },
            {
                name: 'Ashok Reddy',
                price: 7.25,
                selectedProfile: 1,
                des: 'Some gems have hidden qualities beyond their luster, beyond their shine. This is one of those gems',
                canPurchase: true,
                soldOut: false,
                image: [
                    {
                        path: 'Images/photo.jpg'
                    }
                ],
                reviews: [
                    {
                        Stars: 5,
                        body: "He has done awesome work",
                        author: 'Srinu Akkineni'
                    },
                    {
                        Stars: 3,
                        body: "He has done awesome work",
                        author: 'Kiran Raj'
                    },
                    {
                        Stars: 2,
                        body: "He has done awesome work",
                        author: 'Nalla Babu'
                    }
                ]
            },
            {
                name: 'Nalla Babu',
                price: 6.85,
                selectedProfile: 1,
                des: 'Some gems have hidden qualities beyond their luster, beyond their shine. This is one of those gems',
                canPurchase: true,
                soldOut: false,
                image: [
                    {
                        path: 'Images/img.jpg'
                    }
                ],
                reviews: [
                    {
                        Stars: 5,
                        body: "He has done awesome work",
                        author: 'Srinu Akkineni'
                    },
                    {
                        Stars: 3,
                        body: "He has done awesome work",
                        author: 'Kiran Raj'
                    },
                    {
                        Stars: 2,
                        body: "He has done awesome work",
                        author: 'Nalla Babu'
                    }
                ]
            }
        ];

        Store.selectTab = function (product, param) {
            product.selectedProfile = param;

        }


        Store.addReview = function () {
            Store.showReview = true;
        }


        Store.addSubmit = function (obj) {

            var params = {
                stars: parseInt(Store.setStar),
                body: Store.setDesc,
                author: Store.setAuthor
            };

            obj.reviews.push(params);

            Store.setStar = "";
            Store.setDesc = "";
            Store.setAuthor = "";
        }

    });

})();



