<template>
  <h5>
    Billing details
  </h5>
  <form @submit.prevent="placeOrder" class="row g-3 mb-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input v-model="firstName" type="text" :class="{ 'form-control': true, 'is-invalid': invMsg.firstNameInvMsg}" id="firstName" placeholder="First Name">
      <div v-if="invMsg.firstNameInvMsg" class="invalid-feedback">
        {{invMsg.firstNameInvMsg}}
      </div>
    </div>

    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input v-model="lastName"  type="text" :class="{ 'form-control': true, 'is-invalid': invMsg.lastNameInvMsg}" id="lastName" placeholder="Last Name">
      <div v-if="invMsg.lastNameInvMsg" class="invalid-feedback">
        {{invMsg.lastNameInvMsg}}
      </div>
    </div>

    <div class="col-12">
      <label for="city" class="form-label">City</label>
      <input v-model="city" type="text" :class="{ 'form-control': true, 'is-invalid': invMsg.cityInvMsg}" id="city" placeholder="City">
      <div v-if="invMsg.cityInvMsg" class="invalid-feedback">
        {{invMsg.cityInvMsg}}
      </div>
    </div>


    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input v-model="address" type="text" :class="{ 'form-control': true, 'is-invalid': invMsg.addressInvMsg}" id="address" placeholder="Address">
      <div v-if="invMsg.addressInvMsg" class="invalid-feedback">
        {{invMsg.addressInvMsg}}
      </div>
    </div>

    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input v-model="email" type="email" :class="{ 'form-control': true, 'is-invalid': invMsg.emailInvMsg}" id="email" placeholder="Email Address">
      <div v-if="invMsg.emailInvMsg" class="invalid-feedback">
        {{invMsg.emailInvMsg}}
      </div>
    </div>

    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input v-model="phone" type="text" :class="{ 'form-control': true, 'is-invalid': invMsg.phoneInvMsg}" id="phone" placeholder="+38(099) 999-99-99">
      <div v-if="invMsg.phoneInvMsg" class="invalid-feedback">
        {{invMsg.phoneInvMsg}}
      </div>
    </div>

    <div class="modal-footer">
    <button type="submit" class="btn btn-success"
    :disabled="!isValid">
      Place Order
    </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CartBillingForm",
  data: () => ({
      firstName: "",
      lastName: "",
      city: "",
      address: "",
      email: "",
      phone: "",
    invMsg: {
        firstNameInvMsg: '',
        lastNameInvMsg: '',
        emailInvMsg: '',
        cityInvMsg: '',
        addressInvMsg: '',
        phoneInvMsg: '',
      },
  }),
  watch: {
    firstName(newFirstName) {
      if(newFirstName.length > 20) {
        this.invMsg.firstNameInvMsg = "First name must be less than 20 symb";
      }
      else this.invMsg.firstNameInvMsg = "";
    },
    lastName(newLastName) {
      if(newLastName.length > 20) {
        this.invMsg.lastNameInvMsg = "Last name must be less than 20 symb";
      }
      else this.invMsg.lastNameInvMsg = "";
    },
    city(newCity) {
      if(newCity.length > 20) {
        this.invMsg.cityInvMsg = "City is invalid";
      }
      else if(newCity[0] !== newCity[0].toUpperCase()) {
        this.invMsg.cityInvMsg = "City must start with a Capital letter ";
      }
      else this.invMsg.cityInvMsg = "";
    },
    email(newEmail) {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(newEmail)) {
        this.invMsg.emailInvMsg = 'Its not an email';
      }
      else this.invMsg.emailInvMsg = "";
    },
    phone(newPhone) {
      if(!/^\+?\d{10,13}$/.test(newPhone))
        this.invMsg.phoneInvMsg = 'Phone must consist of numbers';
      else {
        this.invMsg.phoneInvMsg = '';
      }
    }
  },
  computed: {
    isValid() {
      for(let i in this.invMsg) {
        if(this.invMsg[i]){
          return false;
        }
      }
      return !(!this.firstName || !this.lastName || !this.address || !this.city || !this.email || !this.phone);
    },
  },
  methods: {
    placeOrder() {
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        city: this.city,
        address: this.address,
        email: this.email,
        phone: this.phone
      };
      console.log(user);
    }
  }
}
</script>

<style scoped>

</style>