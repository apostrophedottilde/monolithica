<template>
  <div id="app">
    <header-navbar></header-navbar>
    <div class="row">
      <context-menu heading="Auction Listings" class="col-md-3"></context-menu>
      <div class="container all-pages">
        <div class="col-md-9">
            <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
    devServer: {
        public: '0.0.0.0:8080'
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: left
}

  .all-pages {
    width: 100%;
  }
</style>
