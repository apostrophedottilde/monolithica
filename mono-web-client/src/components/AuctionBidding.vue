<template>
  <div class="container my-2 card">
    <div class="row">
        <div class="col-6">
            <div class="form-group">
              <label for="bidAmount">Bid amount</label>
              <input id="bidAmount" v-model="bidAmount" class="form-control" type="number" name="bidAmount"/>
            </div>
            <button v-on:click="placeBid(listing._id)" class="btn btn-dark" value="Place bid">place bid</button>
        </div>
        <div class="col-6 fadeout">
            <div v-for="bid in auctionBids" class="pull-right">
                <auction-bid-card v-bind:bid="bid"></auction-bid-card>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import AuctionBidCard from "./AuctionBidCard";
  export default {
  name: 'auction-bidding',
      components: {AuctionBidCard},
      data: () => {
      return {
          bidAmount: 0,
      }
  },
  props: {
    listing: {}
  },
  methods: {
    placeBid: function (listingId) {
        const jwt = this.$cookie.get('jwt');
        console.log(jwt);
        axios({
          method: 'PUT',
          url: `http://localhost:9000/api/v1/listings/${listingId}/bids`,
          headers: {'Authorization': jwt},
          data: {
              bidAmount: parseInt(this.bidAmount),
              highestOffer: 70000,
              currencyType: 'GBP' }
        })
        .then(result => {
        this.$parent.listing = result.data;
        }, error => error)
    },
    getUser: function(userId) {
      const jwt = this.$cookie.get('jwt');
      return axios.get(`http://localhost:9001/api/v1/users/${userId}/avatar`, {headers: {"Authorization": jwt}})
          .then(res => {
              console.log('forum user: ' + JSON.stringify(res));
              return res.data;
          }).catch(err => err)
    }
  },
  computed: {
      auctionBids: function() {
          return this.$parent.listing.bids.slice(0,5);
      }
  }
}
</script>

<style scoped>
    .fadeout {
        border   : 1px #d8d8d8 dashed;
        position : relative;
    }

    .fadeout:after {
        content  : "";
        position : absolute;
        z-index  : 1;
        bottom   : 0;
        left     : 0;
        pointer-events   : none;
        background-image : linear-gradient(to bottom,
        rgba(255,255,255, 0),
        rgba(255,255,255, 1) 90%);
        width    : 100%;
        height   : 4em;
    }
</style>
