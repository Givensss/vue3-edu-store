<template>
  <table class="table cart-table">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" class="text-center">Quantity</th>
      <th scope="col" class="text-center">Price</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>

    <!-- CartProductItem component -->
    <cart-product-item
        v-for="(product, index) in products"
        :index="index"
        :id="product.id"
        :name="product.name"
        :amount="product.amount"
        :price="product.price"
        :image="product.image"
    />

    </tbody>
    <tfoot>
    <tr class="fw-bold px-4">
      <td class="text-end">
        Total:
      </td>
      <td class="text-center">{{totalAmount}}</td>
      <td class="text-end">{{ totalPrice }}$</td>
    </tr>
    </tfoot>
  </table>
</template>

<script>
import CartProductItem from "./CartProductItem";

export default {
  name: "CartProductsList",
  components: {
    CartProductItem,
  },
  computed: {
    products() {
      return this.$root.cartProducts;
    },
    totalAmount() {
      console.log(this.$root.totalAmount);
      return this.$root.totalAmount;
    },
    totalPrice() {
      console.log(this.$root.totalAmount);
      return this.$root.totalPrice;
    },
  },
}
</script>

<style scoped>

</style>