<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">monolithica</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'LoginPage', params: { id: 1234 } }">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'UserRegistrationPage', params: { id: 1234 } }">Register User</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'LiveChatWindow', params: { id: 1234 } }">Chat</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'NewListingPage', params: { id: 1234 } }">New Listing</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'BrowseListingsPage', params: { id: 1234 } }">Browse Listings</router-link>
          </li>
          <li class="nav-item">
            <div class="nav-link" v-on:click="logout">Logout</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'header-navbar',
    data: () => {
        return {}
    },
    methods: {
        logout: function() {
            this.$cookie.delete('jwt');
            this.$router.push('BrowseListingsPage');
        }
    }
}
</script>

<style>

</style>
