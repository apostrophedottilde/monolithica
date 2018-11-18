<template>
  <div class="display-card col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" v-bind:src="img" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{{title}}</a>
        </h4>
        <h5>{{price}}</h5>
        <p class="card-text">{{body}}</p>
        <p class="card-text">{{listingType}}</p>
      </div>
      <div class="card-footer">
        {{footerText}}
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'display-card',
  props: {
    title: String,
    price: String,
    body: String,
    listingType: String,
    footerText: String,
    img: String
  }
}
</script>

<style>
  .display-card {
    width: 210px;
  }
</style>
