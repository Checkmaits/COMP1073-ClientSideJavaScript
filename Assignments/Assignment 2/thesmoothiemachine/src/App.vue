<template>
  <header class="header border-bottom">
    <div class="container my-3">
      <h1 class="navbar-brand fw-bold">The Smoothie Machine</h1>
    </div>
  </header>
  <main class="main mt-4">
    <div class="container">
      <div class="row align-items-start">
        <div class="col-12 col-md-6">
          <h3 class="fw-bold">Build your smoothie</h3>
          <form @submit.prevent="handleSubmit()">
            <div class="form-group">
              <label>Flavour:</label>
              <select v-model="flavour" class="form-select" required>
                <option value="vanilla" selected>Vanilla</option>
                <option value="strawberry">Strawberry</option>
                <option value="raspberry">Raspberry</option>
                <option value="blueberry">Blueberry</option>
                <option value="rainbowTwist">Rainbow Twist</option>
              </select>
            </div>
            <div class="form-group mt-2">
              <label>Size:</label>
              <select v-model="size" class="form-select" required>
                <option value="small" selected>Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div class="form-check mt-2">
              <input v-model="xtraProtein" type="checkbox" class="form-check-input" />
              <label class="form-check-label">Xtra Protein</label>
            </div>
            <div class="form-check mt-2">
              <input v-model="flavourBooster" type="checkbox" class="form-check-input" />
              <label class="form-check-label">Flavour Booster</label>
            </div>
            <button type="submit" class="btn btn-outline-success mt-3">Add to bill</button>
          </form>
        </div>
        <div class="col-12 col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-bold">My bill</h5>
              <p v-if="smoothies.length < 1" class="card-text text-muted mb-0">No smoothie(s) built yet...</p>
              <div v-else class="smoothie-bill">
                <div v-for="smoothie in smoothies" class="smoothie-bill-item">
                  <div class="d-flex justify-content-between align-items-start">
                    <div class="d-flex flex-column">
                      <p class="fw-bold mb-0">Smoothie</p>
                      <small class="text-muted mb-2"
                        >(Size: {{ smoothie.size }}, Flavour: {{ smoothie.flavour }}, Addons: [{{
                          smoothie.addons.join(", ")
                        }}])</small
                      >
                    </div>
                    <p class="mb-0 fw-bold">${{ smoothie.calculatePrice() }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="smoothies.length > 0" class="card-footer bg-transparent">
              <p class="text-end mb-0">Subtotal: ${{ calculateTotal().subtotal }}</p>
              <p class="text-end mb-0">Tax: ${{ calculateTotal().tax }}</p>
              <p class="text-end mb-0">Total: ${{ calculateTotal().total }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer border-top">
    <div class="container my-3">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-muted mb-0">Brock Mowry - 200475649</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { Smoothie } from "./smoothie";
import { round } from "./utils";

export default {
  name: "App",
  data() {
    return {
      flavour: "",
      size: "",
      xtraProtein: false,
      flavourBooster: false,
      smoothies: [],
    };
  },
  methods: {
    handleSubmit() {
      const addons = [];
      if (this.xtraProtein) addons.push("xtraProtein");
      if (this.flavourBooster) addons.push("flavourBooster");
      this.smoothies.push(new Smoothie(this.flavour, this.size, addons));

      // reset
      this.flavour = "";
      this.size = "";
      this.xtraProtein = false;
      this.flavourBooster = false;
    },
    calculateTotal() {
      const subtotal = this.smoothies.reduce(function (total, smoothie) {
        return total + smoothie.calculatePrice();
      }, 0);
      const tax = subtotal * 1.13 - subtotal;
      const total = tax + subtotal;

      return {
        subtotal: round(subtotal),
        tax: round(tax),
        total: round(total),
      };
    },
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
