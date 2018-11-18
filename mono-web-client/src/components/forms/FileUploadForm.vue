<template>
<div>
  <b-form-file v-model="file" :state="Boolean(file)" @change="changedFiles" placeholder="Choose a file..."></b-form-file>
  <div class="mt-3">Selected file: {{file && file.name}}</div>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      file: null,
      file2: null
    }
  },
  methods: {
    changedFiles: function (event) {
      console.log(event.target.files)
      this.$emit('changedimagefiles', event.target.files)
    }
  }
}
</script>
