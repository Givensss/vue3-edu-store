<template>
  <div class="col-md-6 col-lg-4 py-3">
    <div class="card py-3">
      <img class="card-img-top" :src='image' alt="macbook-pro">
      <div class="card-body">
        <h5 class="card-title">
          {{name}}
        </h5>
        <p class="card-subtitle mt-2 mb-3">
          {{category}}
        </p>
        <h5 class="fs-3 text-success">
          {{`$${price}`}}

        </h5>
        <p class="mt-3">
          Stock:
          <strong v-if="isAvailable" class="text-success">Available</strong>
          <strong v-else class="text-danger">Sold out</strong>
        </p>
        <button
            :disabled="!isAvailable || isSetInCart"
            @click="add"
            :class="`btn ${(isAvailable && !isSetInCart) ? 'btn-success' : 'btn-secondary'} w-100 shadow-none`">
          {{!isSetInCart ? "Add to cart" : "Added"}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    name: {
      type: String,
      isRequired: true,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    isAvailable: {
      Boolean
    },
    id: {
      Number
    }
  },
  methods: {
    add() {
      this.$emit('add-to-cart');
    },
  },
  computed: {
    isSetInCart() {
      console.log(this.id)
      return this.$root.isSetInCart(this.id)
    }
  }
}
</script>

<style scoped>

</style>