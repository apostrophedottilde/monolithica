<template>
  <div class="form-group">
    <label for="newItemTagsInput">Enter item tags</label>
    <input type="search" formControlName="newItemTagsInput" class="form-control">

    <label for="tagsList">Item currently tagged as</label>
    <div id="tagsList">
      <ul v-for="tag in itemTags" v-bind:key="tag.name">
        <li> <b-badge>{{tag.name}}</b-badge></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'item-tag-mangement',
  data: () => {
    return {
      itemTags: [{
        name: 'japanese'
      },{
        name: 'animated'
      },{
        name: 'rare'
      },]
    }
  },
  methods: {
  
  }
}
</script>

<style scoped="true">
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: inline-block;
}
li {
    float: left;
}
</style>
