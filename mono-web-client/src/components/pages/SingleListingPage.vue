<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <a href="#"><img class="listingImage card-img-top float-left" v-bind:src="listing.images[0].secure_url" alt=""></a>
        </div>
        <div class="col-6">
          <div>
            <h2>{{listing.item.title}}</h2>
            <p class="">{{listing.item.briefDescription}}</p>
            <p class="">{{listing.item.fullDescription}}</p>
            <p class="">{{listing.listingType}}</p>
          </div>
          <div v-if="1 == 0">
            <b-alert variant="success" show>Success Alert</b-alert>
          </div>

          <div v-if="1 == 0">
            <b-alert variant="danger" show>Danger Alert</b-alert>
          </div>

          <div v-if="1 == 1">
            <b-alert variant="dark" show>Dark Alert</b-alert>
          </div>
        </div>

        </div>
        <div v-if="listing.listingType === 'AUCTION'"> <auction-bidding v-bind:listing="listing" > </auction-bidding> </div>
      </div>

      <forum></forum>

  </div>
</template>

<script>
import axios from 'axios'
import Forum from "../Forum";

export default {
  name: 'single-listing-page',
    components: {Forum},
    data: function () {
    return {
      id: '',
      forumEntryInput: '',
      listing: {}
    }
  },
  created: function () {
      this.id = this.$route.params.listingId;
      this.getListing();
  },
  methods: {
    getListing: function () {
        const jwt = this.$cookie.get('jwt');
        console.log(jwt);
        axios.get(`http://localhost:9000/api/v1/listings/${this.id}`, {
            headers: {'Authorization': jwt}
        })
        .then(result => {
            this.listing = result.data
        }, error => error)
    }
  }
}
</script>

<style>
  .listingImage {
    width: 400px
  }

  .forumEntryInput {
    width: 100%;
  }

  .forumEntryInputSubmit {
    width: 100%;
  }

  .userThumbnail {
    width: 64px;
    max-height: 64px;
  }
</style>
