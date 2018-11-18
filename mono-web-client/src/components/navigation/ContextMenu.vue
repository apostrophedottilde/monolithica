<template>
  <div class="col-lg-3">
    <h2 class="my-4">{{heading}}</h2>
    <div v-for="item in listItems" v-bind:key="item.name" class="list-group">
      <br/>
      <a href="#" class="list-group-item" v-bind:title="item.hoverText">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  name: 'context-menu',
  data: () => {
    return {
      heading: 'TEST NAME'
    }
  },
  computed: {
    listItems () {
      return store.getters.contextMenuItems
    }
  }
}
</script>
