var allProduct = [{
    id: 1001,
    name: 'Avene 雅漾~六效全能卸妝液(500ml)',
    price: 529,
    type: 4,
    stock: 0,
    sales: 500,
    img: 'images/product_1.jpg'
}, {
    id: 1002,
    name: 'Stiefel~潔美淨層脂質保濕乳液(200ml)',
    price: 709,
    type: 4,
    stock: 200,
    sales: 4000,
    img: 'images/product_2.jpg'
}, {
    id: 1003,
    name: 'Avene雅漾~再生修護霜(40ml)',
    price: 329,
    type: 4,
    stock: 300,
    sales: 300,
    img: 'images/product_3.jpg'
}, {
    id: 1004,
    name: '理膚寶水~全面修復霜(100ml)',
    price: 490,
    type: 4,
    stock: 400,
    sales: 2000,
    img: 'images/product_4.jpg'
}, {
    id: 1005,
    name: '韓國 清銀露~宮廷秘方活顏霜(100g)',
    price: 199,
    type: 4,
    stock: 500,
    sales: 1000,
    img: 'images/product_5.jpg'
}]

var List = new Vue({
    el: '#page-list',
    data: {
        product: [],
        list: [],
        ids: [],
        totalPrice: 0,
        keyword: ""
    },
    created() {
        this.product = allProduct;
    },
    methods: {
        /**
        * @method 添加到购物车
        * @param {Object} goods 商品
        */
        addToCart(goods) {

            if (this.ids.indexOf(goods.id) == -1) {
                if (goods.stock > 0) {
                    goods.count = 1;
                    this.list.push(goods);
                    this.ids.push(goods.id);
                }
                else { alert("庫存不足！") }
            } else {
                this.list.map(function (ele) {
                    if (ele.name == goods.name) {
                        if (goods.stock > 0) {
                            ele.count += 1;
                        }
                        else { alert("庫存不足！") }
                    }
                })
            }
            this.culTotalPrice();
        },
        /**
        * @method 計算總價
        */
        culTotalPrice() {
            var num = 0;
            this.list.forEach(function (item) {
                num += parseFloat(item.price * item.count);
            });
            this.totalPrice = num;
        },
        /**
        * @method 關鍵字搜尋
        */
        searchProduct() {
            var self = this;
            if (self.keyword != "") {
                self.product = allProduct.filter(function (item) {
                    return item.name.toLowerCase().indexOf(self.keyword.toLowerCase()) != -1;
                });
            } else {
                self.product = allProduct;
            }

        }
    },
    computed: {
    }
});

