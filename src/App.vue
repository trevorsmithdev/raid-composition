<template>
  <main>
    <header>
      <h2>Raid Composition</h2>
    </header>
    <div class="main-content">
      <section class="class-grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
      </section>
      <RaidLineup />
    </div>
  </main>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Main from './components/Main.vue'
import RaidLineup from './components/RaidLineup.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-content {
  max-width: 1200px;
  margin: auto;
}

header {
  background-color: #5D576B;
  color: #F4F1BB;
  padding: 1rem;
}

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
  justify-content: center;
  align-items: center;
}
</style>
