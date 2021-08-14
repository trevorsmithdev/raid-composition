<template>
  <section class="raid-lineup-container"> 
    <div class="group-1 group">Group 1</div>
    <div class="group-2 group">Group 2</div>
    <div class="group-3 group">Group 3</div>
    <div class="group-4 group">Group 4</div>
    <div class="group-5 group">Group 5</div>
    <div class="group-standby group">Standby</div>
  </section>
</template>

<style scoped>
.raid-lineup-container {
  background-color: #E6EBE0;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: 240px;
  gap: 1em;
}

.group {
  width: 100%;
  background-color: #5D576B;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E6EBE0;
}
</style>