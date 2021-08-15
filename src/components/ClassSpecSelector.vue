<template>
  <section class="class-grid-container">
    <div class="grid-item druid">
      <div class="druid-balance spec-icon" />
      <div class="druid-feral spec-icon" />
      <div class="druid-resto spec-icon" />
    </div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
  </section>
</template>

<style scoped>
.class-grid-container {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 40px;
  gap: 1em;
}

.grid-item {
  background-color: #E6EBE0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.spec-icon {
  width: 30px;
  height: 30px;
  background-size: cover;
}

.druid {
  background-color: rgba(255, 124, 10, .40)
}

.druid-balance {
  background-image: url('/src/assets/spec_icons/druid_balance.jpeg');
}

.druid-feral {
  background-image: url('/src/assets/spec_icons/druid_feral.jpg');
}

.druid-resto {
  background-image: url('src/assets/spec_icons/druid_resto.jpg');
}
</style>