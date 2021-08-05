<template>
  <div>
    <div v-for="playerClass in classes" :key="playerClass.slug">
      <h4>{{ playerClass.displayName }}</h4>
      <div class="flex row">
        <div class="spec-box" v-for="spec in playerClass.specs" :key="spec.slug">
          <span>{{ spec.displayName }}</span>
        </div>
      </div>
    </div>
    <hr />
    <div class="groups">
      <button @click="handleAddGroup">Add Group</button>
      <div class="flex row wrap">
        <div class="group" v-for="group in groups" :key="group.name">
          <div class="group-content">
            <h5>{{ group.name }}</h5>
            <span @click="handleRemoveGroup(group.name)">X</span>
            <div class="group-slot" v-for="slot in group.slots" :key="slot.position">
              {{ slot.player || 'Empty' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { classes } from '../common/constants'
export default {
  data () {
    return {
      classes: classes,
      groups: []
    }
  },
  methods: {
    handleAddGroup() {
      this.groups.push({
        name: `Group ${this.groups.length + 1}`,
        slots: [{ position: 1 }, { position: 2 }, { position: 3 }, { position: 4 }, { position: 5 }]
      })
    },
    handleRemoveGroup(groupName) {
      this.groups = this.groups.filter(group => group.name !== groupName )
    }
  }
}
</script>

<style>
.flex {
  display: flex;
}
.row {
  flex-direction: row;
}
.wrap {
  flex-wrap: wrap;
}
.groups {
  margin-top: 1rem;
}
.group {
  width: 25%;
}
.group-content {
  padding: 0.5rem;
}
.group-slot {
  background-color: gray;
  color: white;
}
.spec-box {
  padding: 20px 10px;
  background-color: yellow;
  border: 1px grey solid;
}

</style>