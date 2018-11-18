<template>
  <div class="listing-container">
      <div>
          <input type="text" class="form-control" formControlName="searchText" placeholder="Search listings..."/>
          <input type="submit" class="form-control" formControlName="goSearch" value="Go"/>
      </div>
      <div v-if="">
          <image-carousel></image-carousel>
      </div>
      <br/>
      <div class="container listing-container">
          <div class="row">
            <div v-for="listing in listings" v-bind:key="listing._id">
              <router-link v-bind:to="{ path: '/listings/' + listing._id }">
                  <div class="listing-card">
                      <div class="card">
                          <div class="row">
                              <div class="col-md-3">
                                  <img class="user-thumbnail" v-bind:src="listingUrl(listing)" alt="">
                              </div>
                              <div class="col-md-9">
                                  <div class="row listing-content">
                                      <div class="title">
                                          {{listing.item.itemType}} - {{listing.item.title}}
                                      </div>
                                      <div class="brief-description">
                                          {{listing.item.briefDescription}}
                                      </div>
                                      <div class="listing-type">
                                          {{listing.listingType}}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                <!--<display-card v-bind:title="listing.item.title" price="£54.76" v-bind:body="listing.item.briefDescription" v-bind:listingType="listing.listingType"-->
                <!--v-bind:footerText="listing.item.type" v-bind:img="listing.images[0].secure_url" class="col-lg-12 listing-card">-->
                <!--</display-card>-->
              </router-link>
            </div>
          </div>
          <pagination></pagination>
      </div>
  </div>
</template>

<script>
import store from '../../store'
import axios from 'axios'
import router from 'vue-router'
import Pagination from "../navigation/Pagination";

export default {
  name: 'browse-listings-page',
    components: {Pagination},
    data: () => {
        return {
            blag: '',
            listings: [],
            selectedListing: ''
        }
      },
      created: function () {
        store.commit('switchedToBrowseListingsPage');
        this.fetchListings();
      },
      methods: {
        fetchListings: function () {
            const jwt = this.$cookie.get('jwt');
            console.log(jwt);
            axios.get('http://localhost:9000/api/v1/listings?page=1&size=20', {headers: {'Authorization': jwt}})
                .then(result => {
                    result.data._embedded.listings.forEach(l => this.listings.push(l));
                    console.log(result)
                }, error => {
                    console.error(error)
                })
        },
        followSelectedListingLink: function(e) {
            router.push({ path: `/listings/${e.target.value}`});
        },
        listingUrl: function(listing) {
            // return 'https://res.cloudinary.com/ddfurqsuk/image/upload/v1538918058/yszbpdzgmwtcytl41by8.jpg';
            return listing.images[0].secure_url;
        }
    }
}
</script>

<style scoped="true">
    .listing-card {
        width: 100%;
        display: inline-block;
    }
    .listing-container {
        width: 100%;
    }

    .user-thumbnail {
        width: 100%;
    }

    .listing-content {
        display: inline-block;
    }

    .title {
        margin-top: 2px;
        margin-bottom: 2px;
    }

    .brief-description {
        margin-top: 2px;
        margin-bottom: 2px;
    }

    .listing-type {
        bottom: 0;
    }
</style>
