import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductsList from "./components/ProductsList";
import CartButton from "./components/cart/CartButton";
import CartModal from "./components/cart/CartModal";
const app = createApp({
    data: () => ({
        cartProducts: [],
    }),
    computed: {
       totalAmount() {
           return this.cartProducts.reduce((res, next) => res + next.amount, 0);
       },
       totalPrice() {
           return this.cartProducts.reduce((res, next) => res + next.price*next.amount, 0);
       }
    },
    methods: {
        addToCart(product) {
            this.cartProducts.push({...product, amount: 1});
        },
        isSetInCart(id) {
            return !!this.cartProducts.find(item => item.id === id);
        },
        removeProduct(index) {
            this.cartProducts.splice(index);
        },
        incrementProduct(index) {
            const product = this.cartProducts[index];
            this.cartProducts.splice(index, 1, {...product, amount: product.amount + 1});
        },
        decrementProduct(index) {
            const product = this.cartProducts[index];
            this.cartProducts.splice(index, 1, {...product, amount: product.amount - 1});
        },
        isEmptyCart() {
            return this.cartProducts.length === 0;
        }
    }
});

app.component("products-list", ProductsList);
app.component("cart-button", CartButton);
app.component('cart-modal', CartModal)
app.mount("#app");
