<template>
  <main>
    <header>
      <h2>Raid Composition</h2>
    </header>
    <div class="main-content">
      <ClassSpecSelector />
      <RaidLineup />
    </div>
  </main>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Main from './components/Main.vue'
import RaidLineup from './components/RaidLineup.vue'
import ClassSpecSelector from './components/ClassSpecSelector.vue'

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
</style>
